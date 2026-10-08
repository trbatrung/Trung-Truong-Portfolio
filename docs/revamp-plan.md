# Revamp Plan (October 2026)

Started 2026-10-08. This picks up from the 2026-08-28 copy pass (commit `4ea07a4`), which
followed only part of `copy-rewrite-brief.md`, and from the desktop prototype built in Cowork
(now in `../_archive/desktop-prototype/`).

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

- **Answered 2026-10-08:** keep the Ember background for now; Claude drafts the "what changed"
  lines from verified facts; pre-AI work is edit & planning, AI systems are full direction;
  "Install the Stack on a Mac" is code-animation output. Headline is "Where does AI belong in
  your video?"

## How we work
- One section at a time. Ethan signs off before the next one starts (the brief requires this).
- Show before and after side by side for every copy change.
- Update `docs/` first, then `index.html`.
- Never invent a fact. Ask.

## Steps
0. **Setup.** ✅ Docs realigned; desktop prototype and brief brought into the repo.
1. **Hero × desktop.** ✅ Fixed-size desktop screen, Ember background, headline picked from six
   neutral options. Inlined into `index.html` (still one self-contained file).
2. **Work.** ✅ The grid is gone. All 34 videos live in desktop folders and Finder, each with a
   description, runtime and confirmed role.
3. **Systems.** ✅ Three systems, each with a "what changed" line drafted from verified facts.
4. **Order and consistency.** ✅ Page cut from about 1,360 to about 480 words; Tools + How I Think
   and What I Do + About merged; Breakaway removed; full POV and tool tests kept as desktop notes.
5. **Ship.** Cleanup ✅ (switcher removed, prototype archived to `../_archive/`, pre-revamp site
   tagged `pre-revamp-2026-10`). Merge and push wait for Ethan's go-ahead after he sees the final
   preview.

## Still open
| What | Notes |
|---|---|
| Founder Intro label | Site says "Infinite Leverage · Founder Intro"; YouTube title is "EO Melboure Intro" (AI Officer Institute). Name the client, or just say Edge8? |
| "For" column in `projects.md` | Which company each pre-AI project was for (4Front, Arrowhead, freelance). Not shown on the site. |
| Copy sign-off | Systems, How I Choose Tools, What I Do + About, folder lines and the 34 video descriptions are drafts. |
| Em dashes in section labels | "01 — Systems" etc. still use them; the tone rules say no em dashes in copy. |
| "8+ years" | CV entries start Mar 2019 (about 7.5 years). Fine if there's earlier work. |

## Gotchas
- **GitHub Pages publishes this repo with Jekyll.** `index.html` is the site. `_config.yml` keeps
  `docs/` and `CLAUDE.md` off the site (they were published as pages until 2026-10-08), and
  folders starting with `_` (like `_archive/`) are never published.
- **The GitHub repo is public.** Everything in `docs/` is readable by anyone. The testing PDF stays
  gitignored.
- Thumbnails come from `img.youtube.com`. A video with no maxres thumbnail needs `hq: true` in
  `WORK` (Cats TNR does).
