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
- [x] Rebuild `index.html` around proof-before-philosophy structure. ✅ 2026-07-21
- [x] Rewrite hero plain (no "consultant" claim); drop lime accent + template signatures. ✅
- [x] Reframe work by decision → outcome (AI blocks have outcome lines). ✅
- [x] Add "Tools I've vetted" / AI R&D section. ✅
- [x] Add "What I do" engagement ladder (strategy → production → editing). ✅
- [x] Place locked POV copy LOW on the page (after the work). ✅
- [x] Choose final design language (tech × film, amber + teal) + drop lime. ✅
- [x] Fix nav logo + "Back to top" anchors (now → `#top`). ✅

### Still open after revamp
- [x] **Ground "Tools I've vetted" in real testing.** ✅ 2026-07-21 — rewritten from the Round 1
      testing brief (5 platforms). Findings are first-hand but **tool names intentionally withheld**
      (client-sensitive; the named breakdown is the paid deliverable). Source PDF lives in the repo
      folder but is `.gitignore`d so it never publishes.
- [ ] Add future test rounds as they happen (bump "Round 1 · July 2026 · 5 platforms" badge).
- [ ] Decision→outcome lines for the non-AI work cards (Brand Film / Ads / Client) — currently
      just meta tags; add a short result line where one exists.
- [ ] Vimeo "Veterans Services" card still uses a styled placeholder (no real thumbnail/hover).
- [ ] Consider adding a GitHub link (still none on the site).
- [ ] Phase 2 (later): case-study sub-pages for 2–3 flagship projects.

## Watch-outs
- [ ] Video card thumbnails rely on YouTube `maxresdefault.jpg` existing per video ID. Any video
      lacking a maxres thumbnail will show a blank/black image.
