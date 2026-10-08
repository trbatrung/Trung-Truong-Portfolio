# Desktop portfolio (`desktop/`)

A second version of the portfolio, styled as a computer desktop: project icons on a black-and-white wallpaper, Mac-style windows, and a dock. Reverse-engineered from an Aura "Interactive Portfolio" template. The main site (`../index.html`) is untouched.

## Files
- `projects.js`: all content (projects, icon positions, About, Contact, dock links). Edit here first.
- `app.js`: behavior (drag icons, open/close/drag windows, YouTube posters, dock).
- `styles.css`: look. Phone layout is the `max-width:700px` block at the bottom.
- `index.html`: shell only, loads the three files above.
- `media/`: local images. `wallpaper.jpg` is a placeholder (Unsplash) to swap for a still of Ethan's.

## Preview
YouTube embeds refuse to play from `file://`, so serve the folder:
`cd desktop && python3 -m http.server 8000` then open http://localhost:8000

## Rules
- No build step, no framework. Plain HTML/CSS/JS.
- Content comes from `../docs/` (source of truth) and `../index.html`. Keep copy in sync with those.
- Copy style: no em dashes (use a period or spaced hyphen), first person, specific, no buzzwords.
- Icons sit at `x`/`y` in % of the screen. Keep the bottom ~18% clear for the dock.
- Shorts use `vertical: true` (tall thumbnail, text-left / player-right window).
