# Genesis — journal-mined angles

Source: weekly journal PDFs (Drive). Sample read: wk03, 07, 11, 15, 19, 23.
Every item below is quoted/derived from the journals. No invention.

## Structural confirmation (use to ground the page)
- Work split into 3 streams (wk03): **MVP01 = people/HR** (People Profiles, Staff
  Details, Teams Mgmt, Tech Units admin) · **MVP02 = work/portfolio** (Portfolio
  Listings, Workstreams, Key Dates, Approvers, Financials) · **Dashboard**.
- Validates the About "two records → join" thesis and the workforce → portfolio
  → dashboard arc as real project structure, not inference.

## Candidate angles (real, specific)

### A. Delayed-hover left navigation (wk19)
"decided to go with a delayed hover interaction - the main concern was when in
PF Mgmt. pages there is an area where 3 actions are close to each other and we
wanted to eliminate unintended feedback." Concrete decision + real rationale.

### B. Co-developing Canopy with the DLS team (wk11, wk19)
Not just "built on Canopy." Daily reviews with the DLS (design-system) team;
feeding CSS output to become **design tokens** ("will support Selva's team when
implemented as design tokens"); deciding which screens adapt to Canopy. A
design-system-in-the-making / contribute-back story.

### C. Abandoned Key Dates timeline + the "heavy data tab" (wk07, wk19)
wk07: Key Dates timeline view — "present a bigger challenge in terms of
developers pipeline, and decision was to move in a different direction."
wk19: Portfolio Overview = "heavy data tab", iterated to make it valuable for
portfolio-level managers. Honest trade-off / constraint-aware judgment.

## Secondary (mention, not primary)
- Design principle (wk15): "on every screen identify the purpose of each area,
  list the actions needed and the key data that drives those." Reusable method.
- Usability testing existed (wk03): a UT session planned, Golan owned the test
  list + screens. Supports adding a Validation section (like investment).
- Domain nuance (wk15): "reporting country vs. team total view" for teams.
- AG-Grid research (wk15) for listings — feasibility-aware design.
- Context: late weeks = early 2020, WFH begins (wk23). Human touch, optional.

## Status: all 21 read
Weeks 04-10 are mostly production status updates. Meaningful design thinking
concentrates below.

## Implemented
- [x] Canopy co-development -> Design system section (wk12/18/20)
- [x] Abandoned Key Dates timeline trade-off -> Approach (wk07)

## New nominations (from full read)

### D. Navigation was the anchor decision (wk01-02, 05, 20) — STRONG
Original Genesis had **3 layered navigation bars** (wk01-02: user orientation +
MVP02 multi-level structure were real UX problems). Explored multiple models
(breadcrumbs, dropdowns, thinner layout), socialised a scalable global nav
(wk05: "team is convinced this is an ideal scalable solution"), then defined a
distinct **in-portfolio left navigation** (wk20) to (1) differentiate from the
global app nav and (2) show portfolio hierarchy. wk01-02: "Confirming the
navigation behaviour is key as it will affect UX on each screen throughout."
This is the architectural spine, not the wk19 hover micro-detail Golan cut.

### E. Deliberate dataviz for the exec dashboard / financials (wk21, wk22)
Real principles, not decoration. wk21: a viz "served its purpose when people ask
more questions about the information versus how/what is displayed"; temporal vs
hierarchical. wk22: area charts for trend over time, column for comparison, max
10-12 datasets; Financial Case Summary (scenario compare, M/Q/Y views, SOA).
Deepens the "heavy data tab" / Dashboard feature.

### F. Persona journey + gain/pain (JTBD) board (wk10, 12, 13, 14)
Persona user-journey workshop (wk10, pain points per hierarchy role, some steps
happen offline). User journey map with named stakeholders (wk12). A gain/pain
mapping board framed explicitly as jobs-to-be-done (wk13/14). Adds specificity
to the currently-generic Approach research.

### G. UX-QA loop + usability testing (wk03, wk20)
UT session planned, Golan owned test list (wk03). Repeated UX-QA in UAT covering
interactions, visual design, animation (wk20). Supports a Validation section.
