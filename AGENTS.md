# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Documentation site for the [`vue-ellipse-progress`](https://github.com/setaman/vue-ellipse-progress) library (v2), built with VitePress 1.x + Vue 3 + Tailwind. Deployed to GitHub Pages under `/vue-ellipse-progress-docs/`.

## Commands

- `npm run docs:dev` — dev server (base path `/`)
- `npm run docs:build` — production build to `.vitepress/dist` (base `/vue-ellipse-progress-docs/`, overridable via `BASE_PATH`)
- `npm run docs:preview` — serve the built site
- `npm run type-check` — `vue-tsc` using `ts.config.json` (note the non-standard filename)
- `npm run lint` / `npm run lint:fix` — ESLint (flat config, `eslint.config.mjs`)

No test suite. CI (`.github/workflows/build.yml`, on PRs) runs `npm ci`, type-check, lint, then build — all must pass. Pushes to `main` trigger `deploy.yml`, which builds and publishes to the `gh-pages` branch.

## Architecture

- **Content** lives in Markdown: `index.md` (home), `guide/` (installation, usage, compatibility, etc.), `guide/options/*.md` (one page per library prop), `guide/slots/`, and `migration/`. Sidebar and nav are hand-maintained in `.vitepress/config.mts` — adding a page means adding it there too.
- **Custom theme** in `.vitepress/theme/`: `index.ts` extends the default theme, replaces `Layout` with `Home.vue`, and globally registers `Vep`, `CardLink`, and `ExampleCode` so they can be used directly in Markdown.
  - `Vep.vue` wraps the real `vue-ellipse-progress` component (`VeProgress`) and loads it with a dynamic `import()` in `onMounted` — it is client-only, which keeps SSR/build from touching browser APIs. Use `Vep` rather than importing the library in pages.
  - `ExampleCode/` is the interactive demo harness (slider, state switcher: Normal/Loading/Determinate/No data, Result/Code toggle). Prop pages embed per-prop demos from `.vitepress/theme/Guide/<PropName>/*.vue`, which are built on `ExampleCode`.
  - `Guide/<Prop>/Snippet*.vue` are code-display snippets for the demos; they are excluded from type-checking in `ts.config.json` (as is `guide/**`).
- Path alias `@/*` → `.vitepress/theme/*`.

## Conventions

- Prop docs pages follow a shared structure: frontmatter (`description`, `aside: false`, `keywords`), `# \`prop\``, a type/values/default table, prose, then demo components. Mirror an existing page in `guide/options/` when adding one.
- Git flow: work on a feature branch (`feat/`, `fix/`, `chore/`) and open a PR; do not commit directly to `main` (it auto-deploys).

## Skills

Project skills live in `.claude/skills/` (e.g. `vitepress`, recorded in `skills-lock.json`). Always discover the available skills at the start of a task and read the ones relevant to it before making changes — for example, consult the `vitepress` skill when touching config, theme, Markdown or Vue-in-Markdown. Pick skills by task relevance. Treat them as reference, not gospel: the `vitepress` skill targets VitePress 2 alpha while this site runs 1.x, so verify version-specific advice against `package.json`.
