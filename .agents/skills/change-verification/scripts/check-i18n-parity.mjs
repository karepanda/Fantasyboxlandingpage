import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..", "..", "..", "..");
const localeRoot = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.join(projectRoot, "src", "i18n", "locales");
const languages = ["en", "es"];
const errors = [];

function flattenKeys(value, prefix = "", keys = new Map()) {
  if (value === null || Array.isArray(value) || typeof value !== "object") {
    keys.set(prefix, Array.isArray(value) ? "array" : typeof value);
    return keys;
  }

  for (const [key, child] of Object.entries(value)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    flattenKeys(child, childPath, keys);
  }
  return keys;
}

async function listNamespaces(language) {
  try {
    return (await readdir(path.join(localeRoot, language)))
      .filter((fileName) => fileName.endsWith(".json"))
      .sort();
  } catch (error) {
    errors.push(`${language}: cannot read locale directory (${error.message})`);
    return [];
  }
}

async function readNamespace(language, fileName) {
  const filePath = path.join(localeRoot, language, fileName);
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    errors.push(`${language}/${fileName}: invalid or unreadable JSON (${error.message})`);
    return null;
  }
}

const namespaceLists = Object.fromEntries(
  await Promise.all(languages.map(async (language) => [language, await listNamespaces(language)])),
);

const allNamespaces = [...new Set(languages.flatMap((language) => namespaceLists[language]))].sort();
for (const namespace of allNamespaces) {
  for (const language of languages) {
    if (!namespaceLists[language].includes(namespace)) {
      errors.push(`${language}: missing namespace ${namespace}`);
    }
  }

  const [english, spanish] = await Promise.all([
    readNamespace("en", namespace),
    readNamespace("es", namespace),
  ]);
  if (!english || !spanish) continue;

  const englishKeys = flattenKeys(english);
  const spanishKeys = flattenKeys(spanish);
  const allKeys = [...new Set([...englishKeys.keys(), ...spanishKeys.keys()])].sort();

  for (const key of allKeys) {
    if (!englishKeys.has(key)) errors.push(`${namespace}: key '${key}' exists only in es`);
    if (!spanishKeys.has(key)) errors.push(`${namespace}: key '${key}' exists only in en`);
    if (englishKeys.has(key) && spanishKeys.has(key) && englishKeys.get(key) !== spanishKeys.get(key)) {
      errors.push(
        `${namespace}: key '${key}' has different value types (${englishKeys.get(key)} vs ${spanishKeys.get(key)})`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error(`i18n parity failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`i18n parity passed for ${allNamespaces.length} namespace(s) across en and es.`);
