# TODO / Backlog

Known gaps and inconsistencies captured when the docs were seeded (2026-07-21). Nothing here is
broken markup — these are content/polish items.

## Needs a decision
- [ ] **Confirm canonical email.** Site uses `trbatrung@gmail.com`; session context shows
      `ethan.truong@edge8.ai`. Decide which is canonical, then update site + [`profile.md`](profile.md).

## Content / polish
- [ ] **Vimeo "Veterans Services" card** has no real thumbnail and no hover-preview player (uses a
      CSS-gradient placeholder). Visually inconsistent with the YouTube cards, which get a hover iframe.
- [ ] **Nav logo** and footer **"Back to top"** both use `href="#"` — logo goes nowhere meaningful.
- [ ] **No repo README** at the project root, and **no GitHub link** on the site.

## Watch-outs
- [ ] Video card thumbnails rely on YouTube `maxresdefault.jpg` existing per video ID. Any video
      lacking a maxres thumbnail will show a blank/black image.
