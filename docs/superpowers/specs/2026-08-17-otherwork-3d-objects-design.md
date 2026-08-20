# Other Work — 3D objects (design spec)

**Branch:** v2-preview only. Do not touch `main` / production.
**Scope:** the homepage (`v2/index.html`) Other-Work section only. three.js loads on this page only.

## Goal
Replace the polaroid-pile Other-Work cards with **five floating soft-primitive 3D
objects** — one per project — that carry the same interaction (rest cluster →
hover spread → click). Premium, restrained, and native to the light editorial
system. Fixes the prior prototype's problems: shapes too large/raw, rest too
overlapping.

## Projects (5)
| Object | Project | Href |
|---|---|---|
| 1 | ASAP | `/v2/asap.html` |
| 2 | Logo Design | `/v2/logo-design.html` |
| 3 | Print | `/v2/print.html` |
| 4 | Portfolio OS | `/v2/portfolio-site.html` |
| 5 | Banking CRM (Banking CRM) | `/banking-crm/` |

## Visual
- **No cards.** Objects float directly on the paper background.
- **Shapes (soft refined primitives):** one per project, e.g. rounded slab/pebble,
  sliced sphere, soft cylinder, cone, rounded wedge. **Slight** size variation
  (not uniform, not dramatic). Smaller and calmer than the prototype's knots.
- **Palette (cohesive, limited):** cobalt `#3d5afe` **dominant** + a muted earthy
  **clay/terracotta** + **cream** — all grounded in the site's existing warm
  neutrals. Not five separate hues. Cobalt stays the hero.
- **Material:** matte clay, soft 3-point studio light, gentle contact shadow.
  One cohesive finish — premium, not glossy/toy. *Optional:* a whisper of
  terrazzo speckle on one piece (nod to the reference), off by default.

## Interaction (unchanged intent)
- **Rest:** airy scatter, **minimal overlap**, small slow drift + slow rotation.
- **Hover the area:** objects ease into a spaced row; project **names fade in**
  below each; each becomes clickable.
- **Hover an object (when spread):** subtle lift + name highlight (cobalt).
- **Click an object:** navigate to its project page.

## Architecture
- **Vendored three.js** at `/vendor/three/three.module.js` (r160, MIT, self-hosted,
  committed). No CDN.
- **One reusable ES module** `/v2/three/cluster.js` (extend the working prototype):
  a single shared `WebGLRenderer` + scene holding all five meshes. One WebGL
  context, not five.
- Mounted on a single `<canvas>` inside the Other-Work section of `v2/index.html`.
  A sibling `<img class="poster">` is the fallback/placeholder.
- **Names** are HTML `<a>` elements positioned each frame by projecting each mesh's
  world position to screen (so labels track the objects and are real links).
- **Click/hover** via raycasting against the five meshes.

## Non-negotiables
- **Lazy init** via IntersectionObserver — renderer + loop start only when the
  section is in view; stop when offscreen.
- **prefers-reduced-motion** → render one static spread frame, no loop.
- **Mobile / no-WebGL** → show the static **poster `<img>`**, never mount the canvas.
- **Dispose on nav** — dispose renderer/geometry/material on `pagehide` (multi-page
  site with page transitions); no leaked WebGL contexts.
- devicePixelRatio capped (≤2), ResizeObserver-driven sizing, no layout shift
  (canvas/poster reserve the section's height).

## Integration
- Remove the polaroid-pile markup + CSS + per-load jitter JS from the Other-Work
  section; keep the section heading ("Other work" / "Off the clock").
- Add the canvas + poster + label container; load `cluster.js` as a module.
- Everything else on the homepage unchanged.

## Acceptance
- Reads as premium and restrained; five objects clearly = five projects.
- Rest is airy (little overlap); hover spreads to a readable, clickable row with names.
- Mobile: poster only, zero WebGL context, no jank. Reduced-motion: static.
- Navigating away disposes cleanly (no "too many WebGL contexts").
- three.js bundle loads only on the homepage; LCP carried by the poster.

## Out of scope
- The other four capability-area models / the 14-page rollout from the old
  3d-models-handover (that brief is set aside).
- Sourced/authored `.glb` assets — all geometry is procedural.
