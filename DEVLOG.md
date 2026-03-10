# Portfolio Site — Dev Log & Documentation
**Domain:** golansarig.com
**Repo:** https://github.com/golansar/portfolio-site
**Live (Vercel):** https://portfolio-site-ashy-alpha.vercel.app
**Built:** March 9, 2026 — 11:43 AM → 9:24 PM (9h 41m)
**Built with:** Claude Code (AI) — zero manual code written

---

## Platform Configuration

### GitHub
- **Repo:** `golansar/portfolio-site`
- **Branch:** `main` (auto-deploy on push)
- **Auth:** PAT stored temporarily in remote URL during session, removed after push

### Vercel
- **Project:** `portfolio-site`
- **Vercel URL:** `portfolio-site-ashy-alpha.vercel.app`
- **Deploy trigger:** Every push to `main` → live in ~30 seconds
- **Custom domains added:**
  - `golansarig.com` → redirects 307 to `www.golansarig.com`
  - `www.golansarig.com` → Production

### Wix DNS (golansarig.com)
DNS switch completed March 9, 2026. Final state:

| Type  | Host name         | Value                                    | TTL    |
|-------|-------------------|------------------------------------------|--------|
| A     | golansarig.com    | 216.198.79.1                             | 1 Hour |
| CNAME | www.golansarig.com | 87a5cc9e10c45c91.vercel-dns-017.com     | 1 Hour |
| CNAME | m.golansarig.com  | www148.wixdns.net                        | 1 Hour |
| NS    | golansarig.com    | ns9.wixdns.net                           | 1 Day  |
| NS    | golansarig.com    | ns8.wixdns.net                           | 1 Day  |

**Note:** NS records are not editable in Wix. Domain registrar remains Wix (renews Sep 2, 2026).
**Propagation:** Up to 48 hours. SSL auto-provisioned by Vercel once active.

---

## Site Architecture

### Pages (9 total)

| File                    | Title                            | Accent  | Notes                          |
|-------------------------|----------------------------------|---------|--------------------------------|
| `index.html`            | Homepage                         | Yellow  | Main portfolio, all work cards |
| `genesis.html`          | Genesis — DBS HR Platform        | Orange  | Links to journals.html         |
| `converse-experience.html` | Converse Experience           | Pink    | Reference hero pattern         |
| `lifestyle-rewards.html` | Lifestyle & Rewards — UOB       | Yellow  | —                              |
| `simple-invest.html`    | Simple Invest                    | Cyan    | —                              |
| `asap.html`             | ASAP Warranty Management App     | Cyan    | Other Work                     |
| `logo-design.html`      | Logo Design                      | Purple  | Other Work                     |
| `print.html`            | Print                            | Orange  | Other Work                     |
| `journals.html`         | Project Journals                 | Cyan    | 4 Google Drive PDF embeds      |
| `portfolio-site.html`   | Portfolio OS — Built with AI     | Yellow  | Other Work — this site's story |

### Shared Files
| File            | Purpose                                              |
|-----------------|------------------------------------------------------|
| `lightbox.js`   | Click-to-enlarge for all images. 156 lines, self-contained (injects own `<style>`). Excludes `.case-hero` and `nav` images. Spring animation `cubic-bezier(0.34,1.4,0.64,1)`. MutationObserver for lazy-loaded images. |

### Shared Files
| File      | Purpose                                                                 |
|-----------|-------------------------------------------------------------------------|
| `fav.svg` | Custom pinball-themed favicon. Round (rx=32). Used as favicon + nav logo on all 10 pages. Designed by Golan — circle (ball), small circle (bumper), rounded rect (flipper). Colors: `#09091B` bg, `#FFDF00` strokes. |

### Images (`/images/` — 61 files)
- **Cover images:** `asap-cover.png`, `logo-design-cover.jpg`, `print-cover.jpg`, `journals-cover.jpg`, `SocialMediaPreviewImage_Portfolio.png`
- **ASAP gallery:** `asap-00.png` → `asap-08.png` (9 files)
- **Logo gallery:** `logo-design-00.jpg` → `logo-design-07.jpg` (8 files)
- **Print gallery:** `print-00.png` → `print-05.png` (6 files)
- **Case study assets:** Genesis, Converse, Lifestyle, SimpleInvest screenshots + `converse-demo.mp4`
- **Lifestyle & Rewards:** `lr-discovery.png`, `lr-workshop-main.png`, `lr-workshop-a1/a2.png`, `lr-workshop-b1/b2/b3.jpg`, `lr-rewards-1/2.png`, `lr-header-explorations.png`, `lr-unified-1/2.png` (12 files)
- **Simple Invest:** `si-overview.png`, `si-self-serve.png`, `si-localized-ui.png` (3 files)

---

## Design System

### CSS Variables (defined in `:root` on every page)
```css
--bg:        #08081a
--surface:   #0f0f26
--surface-2: #161638
--border:    rgba(255,255,255,0.07)
--text:      #eeeef8
--muted:     #7878a0
--yellow:    #ffe000
--pink:      #ff2d6b
--cyan:      #00d4ff
--orange:    #ff6b35
--purple:    #b06cff
--glow-y:    0 0 24px rgba(255,224,0,.45)
--glow-p:    0 0 24px rgba(255,45,107,.45)
--glow-c:    0 0 24px rgba(0,212,255,.45)
--glow-o:    0 0 24px rgba(255,107,53,.45)
--font-px:   'Press Start 2P', monospace
--font:      'Space Grotesk', sans-serif
```

### Typography
- **Body / UI:** Space Grotesk (300, 400, 500, 600, 700) — Google Fonts CDN
- **Labels / Accents:** Press Start 2P — Google Fonts CDN

### Hero Pattern (reference: `converse-experience.html`)
```html
<div class="case-hero">           <!-- max-height:520px; overflow:hidden -->
  <img ... filter:brightness(.75) />
  <div class="case-hero-overlay"> <!-- gradient: transparent 40% → var(--bg) 100% -->
  <div class="case-hero-info">    <!-- position:absolute; bottom:48px -->
    <!-- client tag, title, tags -->
  </div>
</div>
```
All 9 pages follow this exact pattern.

---

## Changelog

### Commit 1 — 11:43 AM · Initial commit
- Created full site from scratch: homepage + 4 case studies (Genesis, Converse, Lifestyle & Rewards, Simple Invest)
- Established design system: CSS variables, dot-grid texture, scanlines, neon accents, pixel font labels
- All page structure: nav → hero → sections → footer

### Commit 2 — ~12:00 PM · GitHub + Vercel connected
- Remote repo created on GitHub (`golansar/portfolio-site`)
- Vercel project linked, first auto-deploy triggered
- Site live at `portfolio-site-ashy-alpha.vercel.app`

### Commit 3 — 14:56 · Images, Other Work pages, S3 image URLs
- Added 3 Other Work pages: `asap.html`, `logo-design.html`, `print.html`
- Fetched 23 gallery images from Notion public API (Python + `loadPageChunk` + `getSignedFileUrls`)
- Fix: Added `Mozilla/5.0 Chrome/120` User-Agent to Python requests (was 403 without it)
- Fix: Re-fetched full S3 URLs (were being stored truncated, causing signing failures)

### Commit 4 — 15:05 · External links on all pages
- Added `email · LinkedIn ↗ · Instagram ↗` to footer of all 7 non-index pages
- Correct LinkedIn URL: `https://www.linkedin.com/in/golansa/`

### Commit 5 — 15:27 · Gallery images + LinkedIn URL fix
- Gallery grids added to ASAP (9 imgs, 3-col), Logo Design (8 imgs, 2-col), Print (6 imgs, 3-col)
- Fixed LinkedIn handle across all 8 pages: `golansarig` → `golansa`

### Commit 6 — 16:33 · Cover images for Other Work pages
- Fetched Notion page cover URLs via `block.value.format.page_cover`
- Downloaded: `asap-cover.png` (1005KB), `logo-design-cover.jpg` (125KB), `print-cover.jpg` (791KB)
- Added covers to all 3 Other Work pages

### Commit 7 — ~17:00 · Hero pattern consistency
- Identified: Other Work pages used a different hero pattern (dark band + separate image)
- Restructured all 3 to use identical `.case-hero` pattern (reference: `converse-experience.html`)
- Full-bleed image, gradient overlay, title/tags anchored to bottom-left

### Commit 8 — ~17:30 · Lightbox (`lightbox.js`)
- Built shared `lightbox.js` (156 lines, vanilla JS, self-contained)
- Features: backdrop blur, spring animation, zoom-in cursor, rotating × close button, Escape key + click-outside to close
- Excludes `.case-hero` images and `nav` images automatically
- MutationObserver handles lazy-loaded images
- Added `<script src="/lightbox.js"></script>` to all 8 pages

### Commit 9 — ~19:00 · Project Journals page (`journals.html`)
- Notion page: `cerulean-outrigger-7b3.notion.site/Project-s-Journals-13efeaebb433807f9b21d846f176d352`
- Cover: `journals-cover.jpg` (Unsplash, downloaded locally)
- Content: description + 3 numbered journal parts + 4 Google Drive PDF embeds (2×2 grid)
- Google Drive file IDs:
  - Week 04: `1eQo_8bOPsZ2wtC46IOqEXab6P9lWfX1q`
  - Week 07: `1XxPY4szJnnddlMmTzL-luS9nLamh0D-h`
  - Week 20: `1hXv_8p1uJD9hHEJCWlLR4h4qpHj6fhmq`
  - Week 22: `1Ga0s7wjkQebipB5UTcvg-bg75Kh4cC2p`

### Commit 10 — 21:14 · Homepage + Genesis footer
- Removed `"Turning complexity into clarity."` H2 from homepage About section
- Added `journals.html` link to Genesis footer (later moved)

### Commit 11 — 21:20 · Journals link in Genesis "The Project" section
- Added `.journals-btn` pill button (orange accent, border glow on hover)
- Placed directly below "THE PROJECT" paragraph — not in footer
- Removed from footer

### Commit 12 — 21:24 · Journals exit button
- Added `← Back to Genesis` as yellow primary button in `journals.html` footer
- Kept `← All Work` as ghost secondary button

### Commit 13 — Later · Portfolio OS page + index card
- Created `portfolio-site.html` — full case study about building this site
- Sections: By the Numbers (6 stats), The Stack (7 platforms), Build Log (timeline), Key Challenges (4 cards), Redesign Readiness (6 points)
- Real data: 9h 41m, 5,388 lines, 9 pages, 48 images, 11 commits, 7 platforms
- Added card to `index.html` Other Work section

---

## Session 2 — March 10, 2026

### Commit 14 — Favicon: custom pinball SVG
- Designed by Golan in Figma: pinball (circle), bumper (small circle), flipper (rounded rect)
- Saved as `fav.svg` (64×64, `#09091B` bg, `#FFDF00` strokes)
- Added `<link rel="icon" type="image/svg+xml" href="/fav.svg">` to all 10 pages
- Updated to round version (`rx=32` clip) — `fav-round.svg` → replaced `fav.svg`

### Commit 15 — Nav logo: GS text → pinball SVG icon
- Replaced `>GS</a>` with `<img src="/fav.svg" width="28" height="28">` across all 10 pages via Python
- Initial size: 28px with yellow drop-shadow filter

### Commit 16 — Nav logo polish
- Homepage: removed `filter:drop-shadow` glow
- All pages: bumped size to 40px, removed glow filter
- Final: `<img src="/fav.svg" width="40" height="40" alt="GS" style="display:block;">`

### Commit 17 — Lifestyle & Rewards: full content update
- **Notion source:** `cerulean-outrigger-7b3.notion.site/Lifestyle-Rewards-UOB-TMRW-dd24d8d330c34488b328446880e74301`
- **Images downloaded (12):** Discovery phase screenshot, Workshop overview + 5 activity shots, Rewards screens (×2), Header explorations, Unified rewards view (×2)
- **Process accordions:** Added images to Discovery and Workshop items. `max-height` increased from 600px → 5000px to allow images to expand
- **Features section:** Replaced 3 plain text cards with 3 expanded sections, each with: description + image(s) + Problem/Solution callout pair (pink/cyan labels)
- **New CSS classes:** `.feature-section`, `.feature-imgs-pair`, `.callout-pair`, `.callout`, `.callout-problem`, `.callout-solution`, `.process-body-inner img`, `.process-img-grid`
- Testing & Iteration images: inaccessible (Notion `file://` URLs — require auth)

### Commit 18 — Simple Invest: full content update
- **Notion source:** `cerulean-outrigger-7b3.notion.site/Simple-Invest-38f56935039e426d943ff6ca26aa9173`
- **Images downloaded (3):** `si-overview.png` (hero), `si-self-serve.png` (feature 01), `si-localized-ui.png` (feature 02)
- **About text:** Updated both columns to match Notion source exactly
- **Hero image:** Updated reference to `si-overview.png`
- **Features section:** Replaced 2 plain text cards with expanded feature sections — each with description, full-width image, and Problem/Solution callout pair
- **Additional Requirements section:** New section added (was in Notion, missing from HTML) — 2-column cards: Scalability & Flexibility + Cross-Regional Collaboration
- **Process accordion:** `max-height` increased from 600px → 5000px
- **New CSS:** `.feature-section`, `.feature-section-*`, `.callout-pair`, `.callout`, `.req-grid`, `.req-card` (same callout pattern as lifestyle-rewards)
- **Notion page ID:** `38f56935-039e-426d-943f-f6ca26aa9173`

### Terminal / Claude Code setup note
- `claude` command not found in Terminal → binary at `~/Library/Application Support/Claude/claude-code/2.1.64/claude`
- Fix: `echo 'export PATH="$HOME/Library/Application Support/Claude/claude-code/2.1.64:$PATH"' >> ~/.zshrc && source ~/.zshrc`

### DNS Switch — March 9, 2026 (evening)
- Navigated Wix Studio → golansarig.com → Manage DNS Records
- Changed A record: `23.236.62.147` → `216.198.79.1` (Vercel)
- Deleted A record: `151.101.128.119` (old Wix IP, no longer needed)
- Changed CNAME `www`: `cdn1.wixdns.net` → `87a5cc9e10c45c91.vercel-dns-017.com`
- Propagation: up to 48 hours

---

## Notion API Reference

**Base URL:** `https://cerulean-outrigger-7b3.notion.site/api/v3/`

**Required header:**
```
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
```

**Get page blocks:**
```python
POST /loadPageChunk
{ "pageId": "<page-id>", "limit": 100, "cursor": {"stack": []}, "chunkNumber": 0, "verticalColumns": false }
```

**Get signed image URLs:**
```python
POST /getSignedFileUrls
{ "urls": [{ "url": "<full-s3-url>", "permissionRecord": { "table": "block", "id": "<block-id>" } }] }
```

**Notion page IDs used:**
- ASAP: `ddb9a6d7-6aca-4926-b33c-0e2930c6c9bf`
- Logo Design: `139feaeb-b433-80dc-89fb-d154e7c6a28b`
- Print: `139feaeb-b433-806b-babf-d2a249f95328`
- Project Journals: `13efeaeb-b433-807f-9b21-d846f176d352`
- Lifestyle & Rewards: `dd24d8d3-30c3-4488-b328-446880e74301`

**Image download flow (Lifestyle & Rewards):**
- `loadPageChunk` returns top-level blocks only — toggle children NOT included
- Images inside toggles: URLs expire after ~1 hour (AWS `X-Amz-Expires=3600`)
- Best practice: fetch Notion page via MCP tool first → extract signed URLs immediately → download before they expire
- `syncRecordValues` endpoint returns 403 on public pages (no auth token)
- `file://` encoded image URLs (Testing & Iteration section) = inaccessible via public API

---

## Future Maintenance

### To add a new page
1. Copy an existing page (e.g. `genesis.html`) as a template
2. Update title, meta, accent colour (`--orange` / `--cyan` etc.), hero image, content
3. Add a card to `index.html` under Featured Work or Other Work
4. Add `<script src="/lightbox.js"></script>` before `</body>`
5. `git add . && git commit -m "..." && git push` → auto-deploys to Vercel

### To do a full visual redesign
**Current effort:** Moderate — styles are embedded per-page (9 files to update)
**Recommended prep:** Extract shared CSS to `/style.css` first → then redesign is a single-file change
**What a redesign touches:**
- `:root` CSS variables (8 values) → global colour swap
- Font imports in `<head>` → typography change
- Component CSS (`.case-hero`, `.btn`, `.tag`, etc.) → layout/style change
- `lightbox.js` already shared — no change needed

### To update DNS
- Login: manage.wix.com → Billing & Subscriptions → Domains → golansarig.com → `...` → Manage DNS Records
- Vercel domain settings: vercel.com → portfolio-site → Settings → Domains

### To add images from Notion
Run the Python snippet from the session with the correct page ID and User-Agent header. Images download to `/images/` and are referenced as `/images/filename.ext`.

---

## Contact / Accounts
- **Email:** oshki2001@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/golansa
- **Instagram:** https://www.instagram.com/golansarig
- **GitHub:** https://github.com/golansar
- **Domain registrar:** Wix (renews Sep 2, 2026)
