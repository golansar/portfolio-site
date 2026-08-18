# Handover — Other Work visual treatment (v2-preview)

**Updated:** 2026-08-18 · **Repo:** `/Users/golan/Developer/portfolio` · **Branch:** `v2-preview`
**Do not touch `main` / production golansarig.com.** Work only on `v2-preview` (Vercel preview).

## Status in one line
The v2 site is built and deployed; PBI is now the 5th "Other Work" project. 3D parked;
Golan picked **direction A (bento image cards)** and it is now **built** into
`v2/index.html` (replacing the polaroid pile). Verified structurally; **not yet pushed** to
`v2-preview` and not yet eyeballed in a real browser.

## Built this session — bento cards (direction A)
Other Work is now a 4-col bento grid (`.owork-grid` / `.ocard`):
- **Feature** = ASAP real cover, 2x2 (421px). Logo + Print real covers as 204px squares.
- **Portfolio OS** (terminal) + **PBI** (dashboard) reuse the old motifs as full-bleed
  card faces — same `.pol-term` / `.pol-dash` styles, now `.ocard-motif` (inset:0 fill).
  This unifies real covers + designed motifs under one card system so the mix reads intentional.
- Every card: 16px radius, hairline `--line` border, bottom scrim + white Bricolage title +
  mono kicker overlay, circular arrow revealed on hover.
- Refined hover: card lifts 6px, face zooms scale(1.06), arrow slides in, shadow deepens.
- Responsive: 4-col → 2-col @900 (feature 16/9 full-width) → 1-col @560 (all 4/3).
- Removed the polaroid jitter script (no longer needed).
- Left the 3D prototype parked (still local-only, uncommitted) per the plan.

**Verify status:** DOM geometry exact (feature 421², four 204² squares), all CSS applied
(radius/scrim/motif bg/arrow), covers return HTTP 200. Browser pane could NOT produce pixels
(the documented 0-width/blank flake) — **confirm visuals in a real browser** at
`http://localhost:8091/v2/index.html` before pushing.

## Next action
Eyeball at localhost:8091, then push to `v2-preview`. (Was: pick A/B/C — done, A.)

## What's live on v2-preview (pushed)
Last commits: `118c8ed` (3D spec), `3866c29` (PBI added), `9e71cbd` (polaroid jitter).
- Homepage `v2/index.html` Other Work = a **polaroid pile** of 5 cards with a rest-cluster →
  hover-spread → click interaction + per-load jitter. Cards: ASAP, Logo Design, Print,
  Portfolio OS (dark terminal motif), PBI (dashboard motif, real KPI numbers).
- **PBI case study** shipped at `/pbi/` — a rethemed React build (portfolio nav/footer,
  paper/ink/cobalt, Bricolage/General Sans) with the Concepts section (auto-scroll strip +
  "view all" grid of 18 AI-generated concept screens, honest "AI-generated in Figma Make"
  labelling). Source in `pbi-case-study/` (its **own git repo**, NOT vendored into the
  portfolio repo; only the built `/pbi/` folder is committed for deploy).

## The decision to carry forward
Other Work cards read as "boring." We tried replacing them with **procedural three.js 3D
objects** (rest cluster → hover spread → labelled + clickable). Verdict after prototyping:
**procedural 3D has a polish ceiling** — without authored/pre-rendered assets (Blender/Spline)
it reads a bit uncanny/"odd," not premium. Golan called it: **pivot to modern, sleek CARDS —
not polaroid.**

**Open question for next session — pick the sleek-card direction:**
- **A — Sleek image cards, bento.** Real covers, varied sizes (one feature + smaller), hairline
  border/soft shadow, refined hover (lift + image zoom, meta slides in). *Recommended.*
- **B — Uniform cards with overlay + motion.** Equal rounded cards, cover + gradient scrim,
  title over image, subtle parallax/tilt.
- **C — Editorial hover-reveal (not cards).** Minimal Bricolage title list; cover floats in on
  hover. Sleekest/most premium but text-forward.

Then: add one strong hover/motion idea so it's not static (no gimmicky pile).

**Constraint any card system must solve:** ASAP / Logo / Print have real cover images;
**Portfolio OS and PBI have no photo** (they're the terminal + dashboard motifs). Mix real
covers with designed-motif covers so it looks intentional.

## Parked (local only, NOT committed) — the 3D prototype
Keep for reference; superseded by the cards pivot. Delete if you commit to cards.
- `vendor/three/three.module.js` (three.js r160, MIT, self-hosted)
- `v2/three/scene.js` (single-object module), `v2/three/cluster.js` (5-object pile↔spread scene)
- `v2/_3dtest.html` (prototype page; soft-primitive shapes + cobalt/clay/cream palette)
- `docs/superpowers/specs/2026-08-17-otherwork-3d-objects-design.md` — the 3D spec (committed
  `118c8ed`) is now **SUPERSEDED**. Also `docs/3d-models-handover.md` was the old dark/Space-
  Grotesk 3D brief — **stale** (wrong aesthetic; the site is light editorial). Ignore both.

## Design system (locked) — the site is LIGHT editorial
Paper `#f5f5f3` · surf `#ecebe8` · card `#fff` · ink `#14151c` · muted `#6a6e75` · line
`rgba(20,21,28,.12)` · accent cobalt `#3d5afe` / acc-ink `#2b3fd4`. Fonts: **Bricolage
Grotesque** (display) + **General Sans** (body); JetBrains/system mono for tech labels.
Restrained, premium, no generic "AI slop." Copy rules: **no em dashes**, no accent-coloured
word-highlighting, closing CTA "Get in touch."

## Projects (5) + hrefs (for the card build)
ASAP `/v2/asap.html` · Logo Design `/v2/logo-design.html` · Print `/v2/print.html` ·
Portfolio OS `/v2/portfolio-site.html` · Banking CRM (PBI) `/pbi/`.

## Local dev / verify
- `preview_start name:pf26` → serves the repo at `http://localhost:8091`. Homepage:
  `/v2/index.html`. PBI: `/pbi/index.html`. (Rebuild PBI after editing its source:
  `cd pbi-case-study && npx vite build --base=/pbi/` then `rm -rf ../pbi && cp -R dist ../pbi`.)
- **Browser pane is flaky** — frequently reports a 0-width viewport (blank/timeout
  screenshots, degenerate layout). Verify via DOM checks; use `resize_window` to a real size
  before screenshots; confirm final visuals in a real browser.

## Still open before launch (unchanged backlog)
- Delete temp mocks `_typespec.html` `_lightmock.html` `_homemock.html` at repo root.
- Favicon missing on all v2 pages; og:image missing on 8/10.
- Homepage still says "Product Designer" (title/hero/SEO) — Golan's call if it becomes UIUX.
- Launch = promote `v2/` → root on `main` (deliberate; not done).
- Lots of pre-existing dirty root files (old live site) + untracked docs/CLAUDE.md/mocks —
  leave them; only commit intended work.

