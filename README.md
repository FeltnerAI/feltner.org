# feltner.org

The public information, documentation, and download hub for the
[FeltnerAI](https://github.com/FeltnerAI/FeltnerAI) project.

This repository is the **website only** — not the FeltnerAI application itself. It is a static
site built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build), and deployed to GitHub Pages at
[feltner.org](https://feltner.org).

## What's here

- **Homepage** — an overview of FeltnerAI, links to downloads, and the main features.
- **Docs** — how to set up a server, connect clients, configure providers, and use the API.
- **Client list** — every app that can connect to a FeltnerAI server (desktop, web, mobile).

## Develop

[Bun](https://bun.sh) is used for everything.

```sh
bun install        # install dependencies
bun run dev        # start the dev server at http://localhost:4321
bun run build      # build the static site into ./dist
bun run preview    # preview the production build locally
```

## Project structure

```text
.
├── .github/workflows/deploy.yml   # build + deploy to GitHub Pages
├── astro.config.mjs               # Astro + Starlight config (site, sidebar)
├── public/
│   ├── CNAME                      # custom domain: feltner.org
│   └── favicon.svg
├── src/
│   ├── assets/                    # logo and images
│   ├── content/docs/              # all pages (homepage, docs, client list)
│   ├── content.config.ts          # Starlight content collection
│   └── styles/custom.css          # brand theme
└── package.json
```

Content lives in `src/content/docs`. Each `.md`/`.mdx` file maps to a route; the sidebar is
configured in `astro.config.mjs`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with Bun and
publishes `./dist` to GitHub Pages. The `public/CNAME` file pins the custom domain.

In the repository settings, set **Settings → Pages → Build and deployment → Source** to
**GitHub Actions**.
