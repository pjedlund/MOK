# MOK

Website for **Malmö Orienteringsklubb** — built on [Eleventy](https://www.11ty.dev) using the [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent) starter, structurally cloned from the [JEDEE](https://github.com/pjedlund/jedee) project.

## Status

Early scaffold. Structure cloned from JEDEE; identity swapped to MOK. Design and assets exist as a static HTML mockup in [_resources/](_resources/) and need to be ported into Eleventy templates and partials. The site does not yet reflect MOK content visually — that's the next phase of work.

## Run locally

```bash
npm install
npm start              # dev server: http://localhost:8080
npm run build          # production build → dist/
```

Requires Node ≥ 20.

## Where things live

- [_resources/mok_full_page_layout.html](_resources/mok_full_page_layout.html) — the design mockup. Open in a browser; everything self-loads from `_resources/`.
- [_resources/MOK-handoff.md](_resources/MOK-handoff.md) — the design handoff: colors, fonts, layout, data sources, club info.
- [_resources/parallax-forest-research.md](_resources/parallax-forest-research.md) — research notes for the parallax-forest treatment.
- `src/` — Eleventy source (templates, layouts, design tokens, styles, scripts) — currently still JEDEE-styled, awaiting MOK adaptation.

`_resources/` is gitignored and used as a scratch / reference area.
