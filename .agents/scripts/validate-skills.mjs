import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const agentsDirectory = path.dirname(scriptDirectory);
const skillsDirectory = path.join(agentsDirectory, "skills");
const namePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const allowedFrontmatterFields = new Set(["name", "description", "license", "allowed-tools", "metadata"]);
const allowedResourceDirectories = new Set(["assets", "references", "scripts"]);
const errors = [];

function addError(filePath, message) {
  errors.push(`${path.relative(process.cwd(), filePath)}: ${message}`);
}

function parseFrontmatter(content, filePath) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    addError(filePath, "missing YAML frontmatter");
    return {};
  }

  const values = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    const rawValue = field[2].trim();
    values[field[1]] = rawValue.replace(/^(["'])(.*)\1$/, "$2");
  }
  return values;
}

async function collectMarkdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(entryPath)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(entryPath);
    }
  }
  return files;
}

async function validateLinks(filePath, content) {
  const linkPattern = /\[[^\]]*]\(([^)]+)\)/g;
  for (const match of content.matchAll(linkPattern)) {
    const target = match[1].trim().replace(/^<|>$/g, "").split("#", 1)[0];
    if (!target || /^(?:https?:|mailto:)/.test(target)) continue;
    const resolvedTarget = path.resolve(path.dirname(filePath), target);
    try {
      await stat(resolvedTarget);
    } catch {
      addError(filePath, `linked resource does not exist: ${target}`);
    }
  }
}

async function validateSkill(skillEntry) {
  const skillDirectory = path.join(skillsDirectory, skillEntry.name);
  const skillFile = path.join(skillDirectory, "SKILL.md");
  let content;

  try {
    content = await readFile(skillFile, "utf8");
  } catch {
    addError(skillDirectory, "missing SKILL.md");
    return;
  }

  const frontmatter = parseFrontmatter(content, skillFile);
  for (const field of Object.keys(frontmatter)) {
    if (!allowedFrontmatterFields.has(field)) addError(skillFile, `unsupported frontmatter field '${field}'`);
  }
  if (!frontmatter.name) addError(skillFile, "frontmatter requires name");
  if (!frontmatter.description) addError(skillFile, "frontmatter requires description");
  if (frontmatter.name && frontmatter.name !== skillEntry.name) {
    addError(skillFile, `name must match parent directory '${skillEntry.name}'`);
  }
  if (frontmatter.name && (!namePattern.test(frontmatter.name) || frontmatter.name.length > 64)) {
    addError(skillFile, "name must be lowercase kebab-case and at most 64 characters");
  }
  if (frontmatter.description && frontmatter.description.length > 1024) {
    addError(skillFile, "description exceeds 1024 characters");
  }
  if (frontmatter.description && /[<>]/.test(frontmatter.description)) {
    addError(skillFile, "description cannot contain angle brackets");
  }

  const lineCount = content.split(/\r?\n/).length;
  if (lineCount > 500) addError(skillFile, `SKILL.md has ${lineCount} lines; maximum is 500`);
  if (/\b(?:TODO|TBD)\b|\[placeholder]/i.test(content)) {
    addError(skillFile, "unfinished scaffold marker found");
  }

  for (const entry of await readdir(skillDirectory, { withFileTypes: true })) {
    if (entry.name === "SKILL.md") continue;
    if (entry.isDirectory() && allowedResourceDirectories.has(entry.name)) continue;
    addError(path.join(skillDirectory, entry.name), "unexpected top-level skill resource");
  }

  for (const markdownFile of await collectMarkdownFiles(skillDirectory)) {
    await validateLinks(markdownFile, await readFile(markdownFile, "utf8"));
  }
}

let skillEntries;
try {
  skillEntries = (await readdir(skillsDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .sort((left, right) => left.name.localeCompare(right.name));
} catch {
  console.error(`Skills directory not found: ${skillsDirectory}`);
  process.exit(1);
}

if (skillEntries.length === 0) {
  console.error("No skills found.");
  process.exit(1);
}

for (const skillEntry of skillEntries) {
  await validateSkill(skillEntry);
}

if (errors.length > 0) {
  console.error(`Skill validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Skill validation passed for ${skillEntries.length} skill(s).`);
