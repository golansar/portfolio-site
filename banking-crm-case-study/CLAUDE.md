# PBI Case Study — Interactive Narrative Artifact

## What this is

A portfolio case study for a private banking CRM discovery engagement (codename "PBI"). Built as a scroll-driven, single-page narrative — not a traditional case study page. Six sections: Opening (stakes) → System Principles (4 diagnostic dimensions) → Way of Working (delivery rhythm) → The AI Angle (AI-accelerated discovery, source-of-truth guardrail) → The Framework (portable 3-tier methodology) → Close (so-what).

Stack: Vite + React + TypeScript + Tailwind + shadcn/ui + Framer Motion. Built originally through Anthropic's `web-artifacts-builder` skill pipeline (init → build → bundle to single HTML for a Claude.ai artifact). That bundling step is optional here — for local dev, just run Vite normally.

```bash
pnpm install
pnpm dev
```

## Non-negotiable: the honesty framing

This is the single most important thing to preserve. **PBI never left the discovery stage.** No screens shipped, no metric moved, no validation loop closed. The whole narrative is built to be precise about this rather than to gloss it:

- Anything describing what AI produced, what design decided, or what the roadmap called for must stay clearly framed as **discovery-stage output / planned scope**, never as a delivered or measured outcome.
- Two places already do this explicitly and should be treated as the pattern to match elsewhere: the dashed-border caveat card in `AIAngle.tsx` ("Held at first-pass status, on purpose"), and the "Roadmap scope, not a measured outcome" tag in `WayOfWorking.tsx` above the 80–90% stat.
- If you add new copy or new interactive elements that state a finding, a stat, or an outcome, ask: is this something that was scoped/planned, or something that was actually measured/delivered? Label it accordingly. When genuinely unsure, default to the more honest (less impressive-sounding) framing.
- Don't let motion or interaction design imply completion or validation that didn't happen (e.g., a "success" checkmark animation on something that was never actually confirmed).

## Design system already in place

- Fonts: `Outfit` (display/headings), `Manrope` (body), `JetBrains Mono` (code/data). Loaded via `@import` in `src/index.css`, not `<link>` in `index.html` — that was a deliberate fix (Parcel's bundler tries to inline local `<link>` hrefs and breaks on remote font URLs; `@import` in CSS survives bundling).
- Accent color: `signal` blue, `#1d4ed8` / `hsl(217 91% 45%)`, defined in `tailwind.config.js` and `index.css`. Neutral base is zinc/slate, not warm cream/sand (deliberately avoided the "AI beige" default).
- Avoid reintroducing: bounce/elastic easing (use exponential ease-out curves — see the Hero scroll-cue for the pattern), and the commonly-overused font list (Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, Space Grotesk — Space Grotesk was actually swapped out for Outfit for this reason).
- `MotionConfig reducedMotion="user"` is wired at the App root — keep new animated components inside that tree so reduced-motion users get a safe fallback automatically.
- Desktop nav rail (`NavRail.tsx`) is a fixed-position side rail with labels that expand on active/hover. Every section currently has `lg:pl-48` specifically to give the longest label ("System Principles") clearance — if you resize or redesign the rail, re-check this collision.
- Mobile nav is a fixed top progress bar. Every section has `scroll-mt-14` so anchor-jump navigation doesn't scroll a heading under the bar — same thing to re-check if that bar's height changes.

## The brief: make it more interactive, less text-dense

Feedback from review: the content and structure are solid, but it currently reads as scroll-and-read rather than something fun to engage with, and there's more simultaneous on-screen text than it needs. The direction is to **convert some of the prose into the interaction itself**, not just layer motion on top of static text. Four concrete conversions to prioritize, in roughly this order of impact:

1. **System Principles** (`Principles.tsx`) — right now, click a tab, read two paragraphs. Stronger version: show the actual broken pattern as a tiny interactive mock (e.g. the client-type choice actually hidden behind a menu), let the person click through and hit the friction themselves, then animate in the cards-first fix. The finding should be something you *do*, not just read.
2. **The AI Angle** (`AIAngle.tsx`) — the prompt spec card is static. Have it type itself out on scroll-into-view (terminal-style), then have the "what came back" list generate with a staggered reveal, like watching the actual pass happen. The section is literally about AI producing output — let the UI perform that instead of describing it.
3. **The Framework** (`Framework.tsx`) — the three tiers are a static stack with a text connector label ("the module plugs in at Discovery"). Make that connection an actual animated docking motion instead of a caption.
4. **Way of Working** (`WayOfWorking.tsx`) — collapse each phase to icon + name by default, with the bullet detail in a drawer/expand-on-interaction. Same content, far less forced-simultaneous text.

Beyond those four: general permission to push further on motion now that this is a real dev environment instead of a bundled single-file artifact — scroll-linked effects (Lenis or similar for smooth scroll + parallax), heavier libraries are fair game (GSAP if Framer Motion isn't enough for something specific), since the single-file-bundle constraint that shaped the first pass no longer applies here.

## Known-good reference points

- `src/components/sections/Hero.tsx` — the "Reading this as" honesty card pattern, and the fixed exponential-ease scroll cue (no bounce).
- `src/components/sections/AIAngle.tsx` — the terminal-style prompt spec card, and the dashed-border caveat pattern for "this isn't validated" framing.
- `src/components/sections/WayOfWorking.tsx` — the roadmap-scope-vs-outcome stat callout, most recently corrected.

## Not yet done / open

- No automated visual regression setup — changes were verified manually via Puppeteer screenshots at 390/834/1440px during the last audit pass, not via a repeatable test.
- No deployment yet. Vercel is a reasonable target once the interaction pass is further along.
