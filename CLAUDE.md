# DevStash

A developer knowledge hub for snippets, commands, prompts, notes, files, images, links and custom types.  

## Context Files

Read the following to get the full context of the project: 
- @context/project-overview.md
- @context/coding-standards.md 
- @context/ai-interaction.md 
- @context/current-feature.md 

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run a production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

There is no test runner configured yet.


## Next.js version caveat

Per `AGENTS.md`, this Next.js version (16.2.10) has breaking changes relative to training data — APIs, conventions, and file structure may differ from what you expect. Before writing framework-related code, check the version's own docs shipped locally at `node_modules/next/dist/docs/` (organized into `01-app`, `02-pages`, `03-architecture`, `04-community`) rather than relying on memorized Next.js behavior. Pay attention to deprecation notices there.
