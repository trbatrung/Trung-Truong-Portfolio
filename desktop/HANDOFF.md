# Handoff: desktop portfolio (2026-10-08)

Built in a Claude (Cowork) session outside this repo. This file is everything that session knew. Read it before changing anything in `desktop/`.

## Update 2026-10-08 (repo session)
- Brought into the repo on branch `claude/latest-update-review-f6010f`.
- **Role decided:** this becomes the hero of the main site and bleeds into the long-form page on scroll. It is not a separate page. Only 5 or 6 flagship icons, so the H1 stays readable.
- **Background decided:** a Pantone-style solid color or an ombre gradient. No photos. The Unsplash `media/wallpaper.jpg` was left out of git, and `wallpaper` in `projects.js` is now empty.
- The copy in `projects.js` mirrors the 2026-08 site copy, which is being revised. Re-sync it after each section of `../docs/revamp-plan.md` is signed off.
- Open items 1, 2 and 7 below are superseded by these decisions.

## What this is
A second version of Ethan's portfolio, styled as a computer desktop. Reverse-engineered from an 8 second screen recording of an Aura template ("Interactive Portfolio", Hero category). Their source is paywalled, so this is a from-scratch rebuild, not their code. The main site at `../index.html` is untouched.

## The reference, as observed (match this feel)
- **Wallpaper:** one full-screen black-and-white portrait photo with a slight vignette. The only color on screen comes from thumbnails and the dock.
- **Desktop icons:** small rounded thumbnail (about 80x52) with a white 12-13px label under it and a soft text shadow. Scattered loosely, not a grid. Draggable.
- **Selected icon:** translucent grey box behind the thumbnail, label gets a blue pill (#0a5cd6), like macOS Finder.
- **Click an icon:** a white Mac-style window fades and scales in (0.92 to 1, about 280ms, ease-out), centered slightly above middle. Title bar has red/yellow/green dots and the project name in grey.
- **Window content:** big title (about 44px, semibold, tight tracking), one grey paragraph, a 2-column centered meta block with tiny uppercase bold labels (Year, Project type, Credits), then a large rounded image that runs past the window bottom and scrolls.
- **Red dot:** closes fast (about 140ms fade).
- **Dock:** frosted glass pill at bottom center. Avatar tile, Notes tile, divider, social tiles.
- **Unclear from the clip:** single or double click to open. We chose single click.

## What's built
See `CLAUDE.md` for the file map. Added on top of the reference:
- Several windows at once with click-to-front, drag by title bar, green dot or double-click title bar to maximize, Esc closes the front window.
- Phone layout (700px and under): icons become a 3-column grid, windows become full-width sheets.
- YouTube: window shows the thumbnail with a play button, click swaps in a youtube-nocookie embed. "Watch on YouTube" link under it.
- Shorts (`vertical: true`): tall thumbnail on the desktop, window splits into text left and a 9:16 player right.

Tested in headless Chromium at 1440x900 and 390x844: no console errors, all 13 thumbnails load, drag / open / close / Esc / keyboard Enter all work, no sideways scroll on phone.

## Content (pulled 2026-10-08 from ../index.html and ../docs/)
- 13 videos in 4 clusters: Brand Film top left (2), Client & Story left (4), Video Advertisement top right (3 Shorts), AI-Augmented right (4, two of them Shorts).
- About window uses the main site's About copy and stat bar. Contact window uses the Contact section copy.
- Dock: About (initials ET, no photo yet), Contact, LinkedIn, Email.
- Rule followed: no invented project facts. Non-AI projects have no description of their own yet, so their window shows the category line. No years or credits anywhere.

## Decisions
- Lives in its own `desktop/` folder. Not committed to git yet (untracked).
- No build step, no framework, same as the main site.
- YouTube thumbnails load straight from img.youtube.com, not downloaded.
- Font Awesome 6.5.1 (cdnjs) for dock icons, Inter (Google Fonts) for text.

## Open / next
1. Replace `media/wallpaper.jpg` (Unsplash placeholder: hooded figure on a beach) with a still of Ethan's. Black and white is applied in CSS, so any photo works.
2. Re-tune icon `x`/`y` once the real wallpaper is in, so icons don't sit on the subject's face.
3. Write a one-line description per non-AI project (`desc` in projects.js). Same gap as "decision to outcome lines for the non-AI work cards" in ../docs/todo.md.
4. Add year / credits if wanted (meta keys are built in `openProject` in app.js).
5. Add a photo for the About tile (`avatar` in projects.js).
6. Veterans Services now has a real YouTube thumbnail (maxresdefault returned 200 on 2026-10-08). The main site still uses the title card, and the ../docs/todo.md item can be closed.
7. Not decided yet: how this relates to the main site and the 3D sphere idea (separate page, replacement, or experiment).
8. Commit and deploy when ready.

## Gotchas
- YouTube embeds fail from `file://` (player config error). Always preview through a local server.
- Icon `y` above about 80% collides with the dock.
- Window placement uses offsetWidth/offsetHeight on purpose. getBoundingClientRect would read the scaled-down size mid-animation.
- Drag threshold is 4px. Under that, releasing the mouse counts as a click and opens the window.
