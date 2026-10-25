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

## heyclicky pass (2026-10-25)
Ethan asked for a pass in the style of heyclicky.com (a mobile recording he shared): Mac windows
around every video, filenames as captions, a sky panel, a pixel wordmark footer. Take the vibe,
never their assets. His calls on 2026-10-25:
- **Theme:** keep the dark Ember look. Only heyclicky's components come in.
- **Voice:** sentence case and the current voice. No lowercase texting tone.
- **Hero (revised the same day):** still one desktop screen. The headline sits small at the top
  left, a live 3D dashboard window sits under it, and the files and folders stay on the right.
  The dashboard shows his three areas (AI work, video production, research) in the style of the
  Edge8 Four Offices dashboard, with real data only. It is its own page (`studio/index.html`),
  built in a separate session. The first try (a loop-street scene above a separate Work section)
  was rejected: "its kinda bad".
- **Dashboard scene (Ethan, later the same day):** Saigon map-ish, with real landmarks and the
  river (Bitexco, Landmark 81, Ben Thanh, the cathedral and post office, the Opera House) and
  street life; different lighting per area; research as papers, binders and books instead of
  monitors; a hologram in the middle of AI work; more lights, a crane and cameras in video
  production; the camera holds still (no spin). Layout signed off: "layout is alright".
- **Map landmarks (Ethan, 2026-10-25, after launch):** "add more places + make it tru-er".
  - Research now sits inside **Ben Thanh Market**, with its clock-tower south gate facing the camera.
  - **Notre-Dame** got twin spires, a rose window, three doors, the nave, the apse and the statue
    in front.
  - The **Post Office** and the **Opera House** got real facades.
  - The **Independence Palace** and the **Ba Son Bridge** are new.
  - The landmarks on the near edge face the camera.
  - Bitexco is unchanged ("perfect").
  - The plain row next to Research became **Nguyen Hue walking street**: paving, lanterns, the
    fountain, people strolling, and colorful shophouses.
  - Its eye-catcher is the café apartment block at **42 Nguyen Hue**, at the river end facing the
    camera. Every balcony is its own lit café. (Ethan: "have apartment 42 as the main eye catcher")
  - The houses across the river use the same shophouse builder.
  - Phones load less: the minified three.js, no ambient-occlusion files, and no waiting for fonts.
- **Hero (revised again, 2026-10-25): no more desktop.** "the whole map thing should be the hero".
  - The 3D map fills the first screen, with the Ember background showing through it. The
    headline, the line under it, the status and the two buttons sit in a band above it.
  - The 34 videos still live in the `WORK` list. Clicking an area on the map opens its work in
    the same windows as before: AI work opens the AI Systems folder, video production opens the
    four production folders, research opens the Tool tests note. "Browse the work" opens
    everything.
  - The map keeps its own KPI cards and area sidebar. The desktop icons and the dock are gone.
- **Positioning (2026-10-25, later): AI is not the pitch.** "i dont want using AI as a usp of me.
  i want my direction as a ... senior creative? like we solve peolpe issues".
  - The hero now asks "What is this video actually for?", with the eyebrow "Creative Direction".
  - "Senior creative" names the roles he's open to, not a past title.
  - The rest of the site follows one section at a time; see `positioning.md`.
- **What I Do:** on a sky panel, with "rates on request". No public prices.
- **Left out:** testimonial wall, project counter, FAQ, signed founder note.

Order of work, one section at a time with Ethan's sign-off: hero with the dashboard window, Systems (video
windows, waveform dots, problem and fix bubbles), What I Do sky panel, footer (desktop icons and a
pixel wordmark).

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
