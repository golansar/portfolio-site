# golansarig.com

Personal portfolio of **Golan Sarig**, Senior Product Designer. Live at
[golansarig.com](https://golansarig.com).

## Stack
Vanilla HTML / CSS / JS, no build step. Smooth scroll via Lenis. Deployed on
Vercel (auto-deploys on push to `main`).

## Structure
```
index.html              Home
<project>.html          Case studies (simple-invest, genesis, asap, …)
styles.css              Global tokens, nav, footer, home
case-study.css          Case-study section kit
motion.js               Reveal-on-scroll, lightbox, custom cursor
images/                 Covers + screenshots (WebP, 1600px)
pbi/                    Banking CRM case study — built output of a React app
vercel.json             cleanUrls, security headers
```

## Branches
- **`main`** — production → golansarig.com
- **`legacy`** — the previous long-form site, kept for reference and iteration.
  Served at its own Vercel URL with `X-Robots-Tag: noindex`.

## PBI case study
`/pbi/` is the built output of a separate React/Vite app. Source lives in
`pbi-case-study/` (see that folder's README) — rebuild with
`npx vite build --base=/pbi/` then copy `dist/` to `/pbi/`.

## Local dev
Static — serve the root with any static server, e.g. `python3 -m http.server`.
