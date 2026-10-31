# Development Guidelines

- Write JavaScript using modern ES6+ syntax; do not introduce TypeScript.
- Build UI with functional React components and hooks. Keep components focused, reusable, and small.
- Use SCSS Modules (`*.module.scss`) for component-specific styles; keep global styles limited to application-wide defaults.
- Keep business logic and data access separate from UI components, using focused hooks or utility modules where appropriate.
- Use clear, descriptive names for components, functions, and variables.
- Avoid unnecessary prop drilling; use the existing state-management approach when state must be shared broadly.
- Follow accessibility best practices: use semantic HTML, label controls, support keyboard interaction, and provide accessible names for interactive elements.
- Split code into focused modules rather than growing large monolithic files.
- Format consistently with the surrounding code. Group imports by external packages first, then project modules, and keep imports explicit.
