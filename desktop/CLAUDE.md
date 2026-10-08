# Desktop portfolio (`desktop/`)

A desktop-style portfolio: project icons on a colored background, Mac-style windows, and a dock. Reverse-engineered from an Aura "Interactive Portfolio" template. It will become the hero of the main site (`../index.html`) and bleed into the long-form page on scroll (see `../docs/revamp-plan.md`).

## Files
- `projects.js`: all content (projects, icon positions, About, Contact, dock links). Edit here first.
- `app.js`: behavior (drag icons, open/close/drag windows, YouTube posters, dock).
- `styles.css`: look. Phone layout is the `max-width:700px` block at the bottom.
- `index.html`: shell only, loads the three files above.
- `media/`: local images, if any. The background is a Pantone-style color or ombre gradient, not a photo (decided 2026-10-08).

## Preview
YouTube embeds refuse to play from `file://`, so serve the folder:
`cd desktop && python3 -m http.server 8000` then open http://localhost:8000

## Rules
- No build step, no framework. Plain HTML/CSS/JS.
- Content comes from `../docs/` (source of truth) and `../index.html`. Keep copy in sync with those.
- Copy style: no em dashes (use a period or spaced hyphen), first person, specific, no buzzwords.
- Icons sit at `x`/`y` in % of the screen. Keep the bottom ~18% clear for the dock.
- Shorts use `vertical: true` (tall thumbnail, text-left / player-right window).
