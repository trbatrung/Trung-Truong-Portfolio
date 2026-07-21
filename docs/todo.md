# TODO / Backlog

Known gaps and inconsistencies captured when the docs were seeded (2026-07-21). Nothing here is
broken markup — these are content/polish items.

## Needs a decision
- [x] **Confirm canonical email.** ✅ `trbatrung@gmail.com` is canonical (confirmed 2026-07-21).
      Already what the site uses — no change needed.

## Content / polish
- [ ] **Vimeo "Veterans Services" card** has no real thumbnail and no hover-preview player (uses a
      CSS-gradient placeholder). Visually inconsistent with the YouTube cards, which get a hover iframe.
- [ ] **Nav logo** and footer **"Back to top"** both use `href="#"` — logo goes nowhere meaningful.
- [ ] **No repo README** at the project root, and **no GitHub link** on the site.

## Revamp backlog (see positioning.md for the full blueprint)
- [ ] Rebuild `index.html` around proof-before-philosophy structure.
- [ ] Rewrite hero plain (no "consultant" claim); drop lime accent + template signatures.
- [ ] Reframe every work card by decision → outcome, not by software.
- [ ] Add "Tools I've vetted" / AI R&D section (promote the product-testing projects).
- [ ] Add "What I do" engagement ladder (strategy → production → editing).
- [ ] Place locked POV copy LOW on the page (after the work).
- [ ] Choose final design language (Cinema/Editorial leaning) + non-lime palette.
- [ ] Phase 2 (later): case-study sub-pages for 2–3 flagship projects.

## Watch-outs
- [ ] Video card thumbnails rely on YouTube `maxresdefault.jpg` existing per video ID. Any video
      lacking a maxres thumbnail will show a blank/black image.
