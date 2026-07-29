# Repository Guidance

## Project overview

- This repository is a static TypeScript application built with Vite 8 and Tailwind CSS 4.
- Source files live in `src/`, static assets live in `public/`, and production output is generated in `dist/`.
- GitHub Pages deployment is configured in `.github/workflows/main.yaml`.
- Use Bun for dependency management and scripts.
- Use the Node.js version declared in `.nvmrc`. Keep `package.json` engine constraints compatible with it.
- Use the installed `vite` skill for Vite configuration, plugins, build, preview, and dev-server changes.

## Common commands

```sh
nvm use
bun install
bun run dev
bun run lint
bun run build
bun run preview
```

Run the narrowest relevant checks while developing. Before handing off code or configuration changes, run:

```sh
bun run lint
bun run build
git diff --check
```

No automated test suite is currently configured. Do not report tests as passing unless a test command has been added and run.

## Code and configuration conventions

- Keep the application framework-free unless a task explicitly requires a framework.
- Use TypeScript for application code and preserve the strict compiler settings in `tsconfig.json`.
- Use ESM syntax throughout the project.
- Follow the existing formatting: two spaces, single quotes, and semicolons.
- Keep reusable source code under `src/` and static files that do not need processing under `public/`.
- Keep Tailwind and global styling changes in the existing CSS and PostCSS configuration structure.
- Do not edit generated files in `dist/` or commit build output.
- Do not weaken ESLint or TypeScript checks to make a change pass.
- Preserve unrelated changes in the working tree.

## Dependencies and workflows

- Use Bun rather than npm or Yarn for installs and dependency updates, and keep `package.json` and `bun.lock` synchronized.
- Do not change package versions, lockfiles, or Node.js versions unless the task requires it.
- GitHub Actions that set up Node.js must read `.nvmrc` through `node-version-file` instead of duplicating the version.
- Keep action versions on supported major releases and review breaking changes before upgrading them.
- Preserve the GitHub Pages permissions, environment, artifact path, and deployment ordering unless deployment behavior is intentionally changing.
- Update `README.md` when changes affect setup, commands, prerequisites, or deployment behavior.
