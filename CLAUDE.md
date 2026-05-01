# CLAUDE.md

## Project Identity

**Name:** fantasyBox

**fantasyBox** is a modern landing page and interactive UI ecosystem designed to create cozy, magical reading experiences. The project emphasizes:

- **Design-to-Code Workflow**: Seamless integration with Figma through custom asset resolution
- **High-Quality Animations**: Smooth, purposeful transitions and motion effects
- **Responsive Interactions**: Interactive elements with drag-and-drop, resizable panels, and carousel functionality
- **Book Lover Community**: A niche product focused on book enthusiasts seeking personalized, aesthetic reading experiences

### Core Mission
Transform book selection into a ritual by curating personalized, cozy experiences delivered directly to book lovers.

## Guiding Principles

- Prioritize pnpm over npm/yarn for package management.
- Maintain the balance between MUI (functional components) and Shadcn (design flexibility).
- Ensure all animations use motion for consistency.
- Strict adherence to TypeScript types; avoid any.

### 1. **Package Manager Priority**
- **Always use pnpm** for all dependency management and scripts
- Never use npm or yarn; they may cause version conflicts with the pnpm-workspace configuration
- Run `pnpm install` to set up the project environment

### 2. **Component Library Balance**
- **Radix UI / Shadcn**: Use for layout components, custom UI elements, and design flexibility
    - Examples: Dialog, Dropdown, Accordion, Popover, Tabs, Tooltip, Select
    - These provide unstyled primitives perfect for Tailwind customization
- **Material UI (MUI)**: Reserve for complex data-driven components (Tables, Data Grids, sophisticated forms)
    - Only use when Radix/Shadcn alternatives are insufficient
    - Leverage MUI icons exclusively for MUI components

### 3. **Consistent Animation Philosophy**
- **Use `motion` library** (Framer Motion) for ALL animations
- CSS transitions are acceptable only for simple hover states and Tailwind transitions
- Avoid mixing animation libraries; maintain consistency across the codebase
- Motion examples: page transitions, fade-ins, slide-ups, parallax effects, interactive reveals

### 4. **Type Safety First**
- **Strict TypeScript adherence**: No usage of `any` type
- Define explicit interfaces and types for all data structures
- Use `React.FC<Props>` or functional component syntax with typed props
- Leverage TypeScript's type inference to minimize boilerplate
- Use `Partial<T>` and `Readonly<T>` for defensive programming

### 5. **Asset Management via Figma Integration**
- Leverage the custom `figmaAssetResolver` plugin for design asset imports
- Import design assets using the `figma:asset/` prefix pattern:
  ```typescript
  import assetName from 'figma:asset/filename.svg';

* Place all design assets in src/assets/ directory
* This workflow keeps design and code synchronized
---
## Critical Commands

- `pnpm install`: Install project dependencies.
- `pnpm dev`: Start the development server.
- `pnpm build`: Build the project for production.
- `pnpm lint`: Run linting checks.

## Development Workflow:
Run pnpm dev to start the local dev server (typically on http://localhost:5173)
Edit files in src/ and watch for automatic hot reloads
Use pnpm build to create a production-ready bundle in dist/
---
## Coding Standards
Component Pattern
- Functional Components (Default)
```
import { Lucide icons by default } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface ComponentProps {
  title: string;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

export function MyComponent({ title, variant = "primary", isLoading = false }: ComponentProps) {
  return (
    <div className={clsx(
      "p-4 rounded-lg",
      variant === "primary" && "bg-blue-500 text-white",
      variant === "secondary" && "bg-gray-200 text-gray-900"
    )}>
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </div>
  );
}
```
## Icon Usage:
* Default: Use lucide-react icons (BookOpen, Package, CheckCircle, Heart, Sparkles, ChevronDown, etc.)
* Exception: Use @mui/icons-material only when embedding icons within MUI components
* Never mix Lucide and MUI icons in the same component unless necessary
## Styling Standards
**Tailwind CSS 4 (Primary)**
* Use a utility-first approach exclusively
* Leverage Tailwind's built-in responsive classes (sm:, md:, lg:)
* Custom colors defined in tailwind.config.js should extend, not override
* Key Tailwind utilities in this project:
- Spacing: p-4, m-2, gap-3, mb-8
- Flexbox: flex, items-center, justify-between
- Grid: grid, grid-cols-2, gap-4
- Responsive: rounded-xl, shadow-lg, overflow-hidden

## Dynamic Class Composition
```
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const buttonClass = twMerge(
  clsx(
    "px-4 py-2 rounded-full transition-all",
    isActive && "bg-brand-primary text-white",
    isDisabled && "opacity-50 cursor-not-allowed"
  ),
  customClassName // Override Tailwind classes if needed
);
```

## PostCSS Configuration
* Tailwind CSS v4 (via @tailwindcss/vite) automatically handles all PostCSS plugins
* postcss.config.mjs is intentionally minimal; add plugins only if needed for special cases
* Avoid redundant plugin declarations

# Inline Styles (Sparingly)
* Use inline styles (style={}) only for:
- Dynamic values (Colors from Figma design system, user-selected themes)
- Values not in the Tailwind scale
- Temporary overrides during prototyping
* Example: fantasyBox color palette
```
  style={{
    backgroundColor: '#99582A',
    color: '#FDF0D5',
    fontFamily: 'Crimson Pro, serif'
  }}
```

# Component Strategy
**Use Radix UI / Shadcn When:**
* Building a custom layout (Dialog, Drawer, Sheet)
* Creating interactive UI elements (Dropdown, Select, Tabs, Toggle)
* Designing accessible form inputs (Checkbox, Radio, Switch)
* Building complex popover/tooltip patterns
* Need fine-grained styling control with Tailwind
Example:
```
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function CustomDialog() {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure?</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

**Use Material UI When:**
* Displaying complex data (Tables with sorting/filtering)
* Building sophisticated form components with validation
* Need pre-built data visualization components (DataGrid)
* Require advanced accessibility features specific to MUI
* Working with MUI-specific icon integration
* Example:
```
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export function DataTable({ rows }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>{/* headers */}</TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (/* cells */))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
```

**Use Motion (Framer Motion) When:**
* Creating page transitions
* Animating component entrance/exit
* Building interactive micro-interactions
* Scroll-based animations
* Complex choreography of multiple elements
Example:
```
import { motion } from "motion/react";

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-4 rounded-lg bg-white shadow-lg"
    >
      Content
    </motion.div>
  );
}
```
---
### Project Structure
```
src/
├── app/
│   ├── App.tsx              (Main landing page component)
│   ├── components/
│   │   ├── figma/           (Figma-imported components)
│   │   └── ui/              (Shadcn/Radix UI primitives)
│   └── imports/             (Images and media assets)
├── dev/                     (Development utilities and previews)
├── styles/                  (Global CSS and theme)
├── declarations.d.ts        (TypeScript declarations)
└── main.tsx                 (React entry point)
```
---
## 🛠 Key Libraries & Their Roles

| Library             | Purpose                 | Usage                                     |
|:--------------------|:------------------------|:------------------------------------------|
| **Vite 6**          | Build tool & dev server | Development and production bundling       |
| **React Router 7**  | Client-side routing     | Navigation and route-based code splitting |
| **Tailwind CSS v4** | Utility CSS framework   | Core styling and responsive layout        |
| **Radix UI**        | Unstyled UI primitives  | Accessible, customizable base components  |
| **shadcn/ui**       | Styled Radix components | Pre-built UI components with Tailwind     |
| **Motion**          | Animation library       | Smooth, performant complex animations     |
| **React Hook Form** | Form state management   | Efficient form handling and validation    |
| **Recharts**        | Charting library        | Data visualization and analytics          |
| **Lucide Icons**    | Icon library            | Default lightweight, clean icons          |
| **Canvas Confetti** | Celebration             | Festive particle effects                  |
| **Sonner**          | Toast notifications     | User feedback and alerts                  |
| **React DnD**       | Drag-and-drop           | Interactive draggable components          |

---
## Common Development Patterns

### Creating a New Component
Use functional components with explicit interfaces for props. Favor `clsx` and `tailwind-merge` for class manipulation.
```
tsx
 //src/components/MyComponent.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility from shadcn

interface MyComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
  onAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "rounded-lg border border-gray-200 p-4",
      "hover:shadow-md transition-shadow duration-200"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left"
      >
        <span className="font-semibold text-lg">{title}</span>
        <ChevronDown className="{cn(" "w-5 h-5 transition-transform", isOpen && "rotate-180" )}/>
      </button>

      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{description}</p>
          {onAction && (
            <Button onClick="{onAction}" className="mt-4">
              Action
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
```

## Handling Forms with React Hook Form

```
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormData {
  email: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div>
        <textarea
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className="w-full border rounded-lg p-2"
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>

      <Button type="submit">Send</Button>
    </form>
  );
}
```
---
## Performance & Best Practices
1. Code Splitting: Use React Router's lazy loading for route-based code splitting
2. Image Optimization: Leverage Vite's automatic image optimization
3. Component Memoization: Use React.memo() for expensive components if necessary
4. State Management: Keep a state as low as possible in the component tree; use Context API for shared state
5. Accessibility: Ensure all interactive elements have proper ARIA labels and keyboard support
6. Testing: Write unit tests for complex logic and component behavior (if a testing framework is added)
---
## Troubleshooting & Common Issues

**Issue: Styles not applying**

* Check: Are you using Tailwind class names or valid CSS?
* Solution: Ensure @tailwindcss/vite plugin is active in vite.config.ts

 **Issue: Icon not rendering**

* Check: Are you importing from lucide-react (default) or @mui/icons-material (MUI only)?
* Solution: For most cases, use Lucide icons; use MUI icons only within MUI components

**Issue: Component not found**
* Check: Is the path alias @ set up in vite.config.ts?
* Solution: Ensure imports use @/components/ui/button instead of relative paths

**Issue: Animations stuttering**
* Check: Are you using motion (Framer Motion) or CSS animations?
* Solution: Use a Motion library for complex animations; use Tailwind transitions for simple hover effects
---
## When to Ask for Help
* Architecture decisions (new feature structure)
* Authentication or security concerns
* Performance optimization strategies
* Third-party library integration questions
* Design system expansions
---
**Last Updated**: May 2, 2026,
**Project Lead**: fantasyBox Team
**Maintained By**: AI Development Assistant (GitHub Copilot)