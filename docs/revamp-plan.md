# Revamp Plan (October 2026)

Started 2026-10-08. This picks up from the 2026-08-28 copy pass (commit `4ea07a4`), which
followed only part of `copy-rewrite-brief.md`, and from the desktop prototype built in Cowork
(`../desktop/HANDOFF.md`).

## Decisions (2026-10-08)
- **Audience:** both, leadership leads. See `positioning.md`.
- **Desktop:** becomes the hero of the main site and bleeds into the long-form page on scroll. It
  is not a separate page.
- **Desktop background:** a Pantone-style solid color or an ombre gradient. No photos.
- **Founder Intro video** (`pR03yYZbI8E`): confirmed Edge8 code-animation output. Keep it, fix
  the label.
- **AI-Augmented Production:** keep three systems, and give each a real failure line.
- **2026-10-08, later:** fixed-size desktop screen; the video grid is gone and all 33 videos
  (20 pulled from the Pitch deck) live in desktop folders with descriptions; the page was cut
  from about 1,360 words to about 480 (see `content.md`).

## How we work
- One section at a time. Ethan signs off before the next one starts (the brief requires this).
- Show before and after side by side for every copy change.
- Update `docs/` first, then `index.html`.
- Never invent a fact. Ask.

## Steps
0. **Setup.** ✅ 2026-10-08. Brought `desktop/`, `CLAUDE.md` and the brief into the repo.
   Rewrote `positioning.md`, `profile.md`, `projects.md`, `tone-and-voice.md`, `content.md`.
1. **Hero × desktop.**
   - Prototype the layout: color/ombre background, H1 in clear space, 5 or 6 flagship icons,
     dock, scroll bleed into the page.
   - Write 4 to 6 H1 options at different levels of directness, each shown in place.
   - Decide whether the desktop JS/CSS gets inlined into `index.html` (the main site is one
     self-contained file) or loaded as separate files.
2. **Work.** One line per project (what they needed, what was decided, what it produced),
   capped at Ethan's confirmed role. Fix the Founder Intro label.
3. **AI-Augmented Production.** Three systems, each with "what broke, what I changed".
4. **Order and consistency.**
   - Decide whether Tools and How I Think move above Work.
   - Calls to action: leadership leads, clients still welcome (breakaway, contact, services note).
   - Use "final master" everywhere. Remove the repeated line in System 02. Swap in the Veterans
     thumbnail. Decide on em dashes in section labels.
5. **Ship.** Commit, merge, deploy, update `todo.md`.

## Inputs needed from Ethan
| For | What |
|---|---|
| Step 1 | Background color or ombre preference (or let Claude propose 3 or 4). Optional headshot for the About tile. |
| Step 2 | Role on each of the 9 non-AI projects (editor only, or creative direction too) and who it was for (4Front, Arrowhead, freelance). |
| Step 2 | Founder Intro label: name EO Melbourne / AI Officer Institute, or just "Edge8"? |
| Step 3 | One real failure per system (code animation, avatar video, AI lesson): what broke, what changed. |
| Step 3 | Is "rebuilt around reusable components" true? |
| Check | "8+ years": the CV entries start Mar 2019 (about 7.5 years). Fine if there's earlier work. |

## Gotchas
- **Before merging this branch:** the main checkout still has untracked copies of `CLAUDE.md`,
  `desktop/` and `portfoliocopyrewritebrief.md`. Git refuses to merge over untracked files, even
  identical ones. Delete those copies first (check that nothing changed in them since 2026-10-08).
- **The GitHub repo is public.** Everything in `docs/` (positioning, verified facts, the brief) is
  readable by anyone once pushed. The testing PDF stays gitignored.
- The desktop's Unsplash placeholder wallpaper was deliberately left out of git.
