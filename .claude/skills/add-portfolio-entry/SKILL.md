---
name: add-portfolio-entry
description: Add a new project card to the "Featured Projects" section of the inseldu.de portfolio (image, projects.tsx entry, EN + DE translations). Use when the user wants to add, showcase, or list a new project/portfolio entry/reference/client work on the site.
---

# Add a portfolio entry

A project card touches exactly three places (see commit `5ddc2d0 feat: jptrfx project` as the reference example):

1. `public/<slug>.png` — preview image
2. `src/components/pages/index/projects.tsx` — entry in the `projects` array
3. `src/locales/en/pages.json` **and** `src/locales/de/pages.json` — copy under `index-page.projects.<key>`

## 1. Gather inputs

Ask the user (in one `AskUserQuestion` / message) for anything not already given:

- **Title**: display name, e.g. `JPTRFX.com`, `Sonq`
- **Category**: short label, e.g. `Fullstack`, `Frontend`, `Backend & Mobile`, `E-Commerce`, `Blog`. Reuse an existing category if one fits.
- **Tags**: 2–3 short tech tags
- **Description**: one sentence in English or German (you translate the other one)
- **URL** (optional): leave it out for projects that aren't public (like `reverbOrdermanager`)
- **Image**: path to a screenshot

Derive the rest yourself:

- **i18n key**: camelCase of the title, e.g. `memoryMachine`, `reverbOrdermanager`, `jptrfx`
- **Image slug**: kebab-case, e.g. `memory-machine.png`, `reverb-order-manager.png`

## 2. Image

- Copy the screenshot to `public/<slug>.png`. Don't overwrite an existing file without asking.
- The card renders it `aspect-video` with `object-cover`, so a landscape screenshot works best. Warn the user if it's portrait or very small (under ~1200px wide).
- If it's larger than ~2500px wide or over ~2.5 MB, offer to downscale it with macOS `sips` (e.g. `sips --resampleWidth 2000 public/<slug>.png`). Ask first; don't do it silently.

## 3. `projects.tsx`

Append to the `projects: ProjectCardProps[]` array (order = display order; new entries go at the end unless the user says otherwise):

```tsx
{
  title: t("projects.<key>.title"),
  category: t("projects.<key>.category"),
  tags: ["SHOPIFY", "LIQUID", "TS"],
  description: t("projects.<key>.description"),
  image: "/<slug>.png",
  url: "https://example.com", // omit the line entirely if there's no public URL
},
```

Conventions:

- Tags are **UPPERCASE**, hard-coded rather than translated, and at most 3 so the card header stays on one line.
- Don't touch the featured Invocraft banner below the grid unless the user explicitly wants to replace the highlight.
- Umami tracking (`data-umami-event`) is handled by `ProjectCard` automatically, so nothing to add.

## 4. Translations

Add the same key to **both** `src/locales/en/pages.json` and `src/locales/de/pages.json`, inside `index-page.projects`, after the last project object:

```json
"<key>": {
  "title": "…",
  "category": "…",
  "description": "…"
}
```

- `title` is usually identical in both languages.
- Translate `category` only if it's a normal word (e.g. keep `Fullstack`, `Frontend`, `E-Commerce` as is).
- The description is shown with `line-clamp-2`, so keep it to one sentence of roughly 120 characters max. Match the tone of the existing entries: factual, first person where natural, no marketing fluff.
- German copy uses proper umlauts and the en dash `–` (the English copy uses the em dash `—`).
- Keep the JSON valid: add the comma to the previous object.

## 5. Verify

- Check both JSON files parse: `bun -e 'for (const l of ["en","de"]) JSON.parse(await Bun.file(`src/locales/${l}/pages.json`).text())'`
- Run `bunx prettier --write src/locales/*/pages.json`. Don't run Prettier on `projects.tsx`: it isn't Prettier-formatted, so it would reformat the whole file. Match the surrounding indentation by hand instead.
- Optionally run `bun run build` to confirm it compiles.
- Show the user the final EN/DE copy so they can tweak the wording.

Don't commit unless asked. If asked, follow the repo style: `feat: <name> project`.
