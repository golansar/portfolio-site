# Launch readiness — golansarig.com v2

**Goal:** verify + confirm content, interactions, and design across the v2 site, then
promote it to production as the new golansarig.com.
**Branch:** work on `v2-preview` (Vercel preview). Production flip is the last, deliberate step.
**Updated:** 2026-08-18

## Pages in scope (10)
Home `v2/index.html` · Simple Invest · Investment Transaction · Lifestyle & Rewards · Genesis ·
Converse Experience · ASAP · Logo Design · Print · Portfolio OS.
(Banking CRM case study ships separately at `/banking-crm/`.)

## Phase 0 — Cleanup (remove non-shipping files)
- [ ] Root temp mocks: `_typespec.html`, `_lightmock.html`, `_homemock.html`
- [ ] 3D prototype (parked, superseded by cards): `v2/_3dtest.html`, `v2/three/`, `vendor/three/`
- [ ] Stale docs: `docs/3d-models-handover.md`, superseded 3D spec
- [ ] Confirm no page links to any removed file

## Phase 1 — Content verification (per page)
- [ ] Proofread copy (typos, tense, names, dates, company references)
- [ ] Copy rules: no em dashes · no accent-coloured word-highlighting · closing CTA "Get in touch"
- [ ] Cross-check against `docs/content/CONTENT-MAP.md` + live-site content notes
- [ ] Positioning/title consistent site-wide (see DECISION 1)

## Phase 2 — Design + system consistency
- [ ] Fonts load + fallback (Bricolage Grotesque, General Sans, mono)
- [ ] Palette tokens consistent (paper/surf/card/ink/muted/line/cobalt)
- [ ] Nav + footer identical across all pages
- [ ] Spacing / hierarchy consistent; no orphaned or mock content

## Phase 3 — Interactions + a11y
- [ ] Every internal link resolves (nav, cards, case-study cross-links, mailto)
- [ ] Hover/motion states, lightbox, page transitions, smooth scroll
- [ ] `prefers-reduced-motion` respected everywhere
- [ ] Keyboard focus, semantic landmarks, alt text, contrast (WCAG AA)

## Phase 4 — SEO / meta / social
- [ ] Favicon on all pages (currently 0/10)
- [ ] og:image on all pages (currently 2/10) + og/twitter tags
- [ ] Meta description + canonical per page
- [ ] robots.txt + sitemap.xml

## Phase 5 — Responsive / cross-device
- [ ] Mobile / tablet / desktop layout pass on every page
- [ ] Real-browser confirmation (preview pane is unreliable here)

## Phase 6 — Launch
- [ ] Positioning decision applied (DECISION 1)
- [ ] Go-live mechanics (DECISION 2): promote `v2/` → root on `main`
- [ ] Domain/DNS on Vercel points golansarig.com at the new build
- [ ] Redirects for any changed URLs; 404 handling
- [ ] Final production smoke test

## Decisions needed
1. **Positioning/title** — homepage + SEO currently say "Product Designer". Keep, or switch to
   "UI/UX Designer" / other?
2. **Go-live mechanics** — how production flips (promote to `main` + who controls DNS).
