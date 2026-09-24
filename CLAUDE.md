# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Yannic Inselmann's personal portfolio site (inseldu.de) — a single-page marketing/portfolio site (hero, projects, tech stack, contact form) built with TanStack Start (React), served in production by a custom Bun server. Despite the README, this is **not** a Next.js project (the README is stale/unused).

## Commands

- `bun install` — install dependencies (repo uses Bun; `bun.lock` is the lockfile)
- `bun run dev` (or `vite dev`) — start the dev server
- `bun run build` (or `vite build`) — build client + server bundles into `dist/client` and `dist/server`
- `bun run start` (or `bun server.ts`) — run the production server against the built `dist/` output (requires `bun run build` first)
- `bun run prettier` — format the whole repo with Prettier (`prettier-plugin-tailwindcss` sorts Tailwind classes)

There is no lint script and no test suite/framework configured in this repo.

### Environment variables

Contact form emails are sent via the MXRoute SMTP API and require env vars validated by `src/server/config.ts` (zod schema): `MXROUTE_SERVER`, `MXROUTE_USER`, `MXROUTE_PASS`, `MXROUTE_FROM`, `CONTACT_TO`. See `.env.example`. The server throws on startup if these are missing/invalid.

## Architecture

- **Framework**: TanStack Start (`@tanstack/react-start`) with file-based routing via `@tanstack/react-router`. Routes live in `src/routes/`; `src/routeTree.gen.ts` is auto-generated from those files by the TanStack plugin — do not hand-edit it.
  - `src/routes/__root.tsx` defines the HTML shell, global nav/header, mobile nav drawer, and language toggle. It is a single-page site: nav links are anchor scrolls to section ids (`intro`, `projects`, `techstack`, `contact`) rather than separate routes, tracked via `IntersectionObserver` in `useActiveSection`.
  - `src/routes/index.tsx` composes the homepage from section components in `src/components/pages/index/` (`hero`, `projects`, `techstack`, `contact`), plus a shared `Footer`.
  - `src/routes/health.ts` exposes a plain-text `/health` endpoint (used by the Docker healthcheck).
- **Production server** (`server.ts`): a standalone Bun script, *not* part of the Vite/TanStack build — it's the container's entrypoint. It preloads small static assets from `dist/client` into memory (with ETag + gzip support) and streams larger files on demand from disk, then falls back all other routes to the built TanStack handler (`dist/server/server.js`). Its behavior is tunable via `ASSET_PRELOAD_*` env vars (see the file's header doc comment for the full list).
- **Server functions**: `src/server/email.ts` defines `sendContactEmail`, a TanStack `createServerFn` that validates input with `src/lib/contact-schema.ts` (zod) and POSTs to the MXRoute SMTP API using `serverConfig` from `src/server/config.ts`.
- **Forms**: `src/lib/form.tsx` sets up a shared `useAppForm` hook via `@tanstack/react-form`'s `createFormHook`, with reusable field components (`TextField`, `TextareaField`, `SelectField`) that read validation errors from field meta.
- **i18n**: `react-i18next`, initialized in `src/locales/i18n.ts`. Translations are split into `pages.json` (per-route/page copy) and `components.json` (shared component copy) under `src/locales/{en,de}/`, merged into i18next namespaces at init. Default/fallback language is English; the header/nav drawer toggle switches `i18n.language` between `en`/`de` at runtime (no URL-based locale routing).
- **Styling**: Tailwind CSS with an extensive custom design-token theme in `tailwind.config.js` (Material Design 3-style color roles like `on-surface`, `surface-container-high`, `primary-container`, plus custom type-scale font sizes/families such as `display-xl`, `headline-sm`, `label-caps`). Prefer these semantic token classes over raw Tailwind colors/sizes when styling to stay consistent with the rest of the site. Fonts are self-hosted via `@fontsource-variable` packages (Inter, Sora, JetBrains Mono).
- **Deployment**: `Dockerfile` is a two-stage Bun build — builder stage runs `bun install` + `bun run build`, runner stage copies only `dist/`, `server.ts`, `node_modules`, and `package.json`, then runs `bun server.ts`. `curl` is installed in the runner image for the container healthcheck against `/health`.
