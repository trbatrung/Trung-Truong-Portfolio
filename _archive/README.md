# Archive

Things retired in the October 2026 revamp, kept for reference. Archived 2026-10-08.

The folder name starts with an underscore so GitHub Pages (Jekyll) never publishes it. It is in the
repo, but not on the live site. Don't link to anything in here from `index.html`.

## What's here

### `2026-08-site/`
The site exactly as it was live before the revamp: commit `4ea07a4`, the copy pass of
2026-08-28. Hero "I own the video pipeline end to end.", a Selected Work grid of 13 videos, and
separate Tools I've Vetted, How I Think, What I Do and About sections, about 1,360 words below the
hero. It's also tagged in git as `pre-revamp-2026-10`, so `git checkout pre-revamp-2026-10` gets
you the whole repo at that point.

### `desktop-prototype/`
The standalone desktop-style portfolio built in a Cowork session on 2026-10-08, as it left that
session (black-and-white Unsplash wallpaper, 13 icons, Mac windows, dock). `HANDOFF.md` is that
session's handoff. Its ideas now live in the hero of `../index.html`: a fixed-size desktop with
folders, a Finder window and notes. Nothing in the live site loads these files.

## Retired in the revamp, not kept as files

- **Background switcher.** The preview had a `?preview` pill to flip the hero background
  between four options: `ember` (teal to amber ombre, chosen), `teal` (deep solid), `amber`
  (burnt solid) and `dusk` (plum, teal and amber mesh). The switcher is gone, but all four
  palettes are still in the CSS. To change the background, set `data-bg` on `<header class="hero">`
  in `../index.html`.
- **Breakaway band** ("Want your video to look like *that*?") and the long-form copy of Tools
  I've Vetted, How I Think, What I Do and About. The full tool findings and the full point of
  view still exist, unchanged, as desktop notes (`<template id="note-tests">` and
  `<template id="note-pov">` in `../index.html`). Everything else is in `2026-08-site/`.
- **Dermatology Course b-roll** (`uGsAgs07RbU`), retired in the 2026-08 pass. See
  `../docs/projects.md`.

## Preview an archived page
YouTube embeds won't play from `file://`, so serve the folder:

```
cd _archive/2026-08-site && python3 -m http.server 8000
```
