# Site Content: Section by Section

Maps 1:1 to `../index.html` on this branch (revamp, 2026-10-08). Draft changes here first,
then mirror them into the HTML. **Status** says where each section stands in the revamp
(`revamp-plan.md`).

## Design language (tech × film)
- **Palette:** near-black base, **amber `#e6a15b`** (film craft) and **teal `#57cbbb`** (AI/tech),
  a nod to the orange-and-teal grade. Amber = interactive and emphasis. Teal = technical metadata
  (indices, timecodes, labels).
- **Type:** Fraunces (display serif) · Space Grotesk (body) · IBM Plex Mono (metadata).
- **Motifs:** film grain, vignette, live running timecode, crop-mark corners, mono spec-sheet labels.
- Entrance motion is enhancement only (guarded by `prefers-reduced-motion`, `<noscript>` fallback).
  Content is never hidden if JS or animation don't run.
- **Hero:** the live 3D map on the Ember ombre (teal to amber), with the headline in a band above
  it. No desktop since 2026-10-25. Other palettes stay in the CSS as `data-bg` options (`teal`,
  `amber`, `dusk`). No photos.
- **Windows (from the heyclicky pass):** every framed piece of media sits in a white Mac window
  with traffic lights and a filename in the title bar, like the work windows.

## Live copy v5 (2026-10-25, later): three skills and the boards
Ethan: "where is the hey clicky style? ... lets emphasize 3 skill for them to read", and the
Finder "just not fit ... maybe an infinity board like our old desktop", "infinity as for each of
them, not sum them all in 1".
- **Skills section (`what-i-do.md`), "Three skills, one owner." Rates on request.** It replaces
  the three service cards. One heyclicky block per area of the map: the skill, a Mac window with a
  filename, waveform dots, the ask in a blue bubble on the left and my answer in an orange one on
  the right (like a messages app, Ethan's call), and a button
  that opens that area's board.
  1. **01 · Research, "Shape the idea".** "What the work is for, before anything gets made. Then
     the right tool, tested head to head." Window `tool-tests.log`, the seven tests in one line
     each (from the Tool tests note). Ask: "Which AI tool should we use for this?" Answer: "First,
     what is this video actually for?" Button: See the tool tests.
  2. **02 · Video production, "Make the work".** "Script to final master: edit, motion, sound and
     color. One owner, no handoffs." Window `joe-schaeffer.mov` (plays in place). Ask: "We have the
     footage. Can you make it a film?" Answer: "On it. First, which story the footage holds."
     Button: See the videos.
  3. **03 · AI work, "Build the system".** "When the work repeats, a workflow that holds the
     standard: briefs, tools and QC. I know the stack under it." Chips: Claude Code, GitHub,
     Vercel, Supabase. Window `founder-intro.mov`. Ask: "The AI drafts never land close to
     final." Answer: "So every job starts from a structured brief. Now the first pass lands
     close." (the verified "what changed" line). Button: See the systems.
  The asks are framings of what a visitor might ask, not quotes from clients.
- **Diagnosis (2026-10-26).** Ethan: "another angle of me", then "it should have its own treatment".
  - **Its own section after the skills:** `diagnosis.md`, "Diagnosis.", "Independent economic analysis".
  - **Lede (the site's own line):** "Vietnam's economy, as it actually is."
  - **One line (from its About page):** "My independent analysis of Vietnam's economy. Each piece takes the
    official claim seriously, then tests it against the data, against how the data was produced,
    and against what people inside the economy see."
  - "Long reads since April 2026 · Ho Chi Minh City", then links to Read Diagnosis and YouTube.
  - **A Mac window previewing the site:** the latest piece with its illustration, then three
    more pieces with titles, dates and read times taken from the site.
  - **The Research board** has one Diagnosis card (Ethan: "not too much - just a overall piece, with
    the logo"). The wordmark "Diagnosis" is set in Newsreader, as on the site; the tagline is
    "Vietnam's economy, as it actually is."; the copy is "My independent analysis of the economy I
    live in. Each piece takes an official claim and checks it against the data, and against what
    people on the ground see."; then "Since April 2026 · Read it ↗". The tool-test notes sit below.
  - **Confirmed (2026-10-26):** Diagnosis itself is published without a personal name, and Ethan
    is fine having his name on it here: "I'm fine having my name on Diagnosis."
- **Boards replace Finder.** Each area has its own endless desktop on the Ember wallpaper
  (`research.board`, `ai-work.board`, `production.board`): drag to move, scroll or pinch to zoom,
  Fit to reframe, and the three-part control on the board switches area. Videos are files with
  their names under them; production keeps its four folders. Research holds `tool-tests.md`,
  `how-i-think.md` and the seven tests as sticky notes. AI work also holds `how-i-think.md` and a sticky with
  "Slop or salvation. Both are wrong." (Ethan: "put it in ai system too"). The map, the hero control, the skill
  buttons and the nav (Work opens production) all open a board.
- **Page order:** map hero → proof strip → three skills → about note → contact. Nav: Work ·
  Skills · About · Contact.

## Live copy v4 (2026-10-25): short, heyclicky style
Ethan: "too try hard to be someone", "i dont want a wall of text". Every line is in `profile.md`.
- **Hero:**
  - under the line, one three-part control: Research ↗ | AI work ↗ | Video production ↗, which
    opens the same work as the map. Beside it: "← Tap one to see the work" (↑ on phones). It
    replaced "Browse the work" and "Get in touch"; the nav's Work and Contact still reach those.
  - eyebrow "Trung (Ethan) Truong · Creative Producer & Technologist";
  - H1 "I build the work, **and the systems behind it**.";
  - line "Research, film, motion and creative technology. Eight years, concept to delivery." (research
    added 2026-10-26, Ethan: "this is lacking research"; it follows the order of the three-part control);
  - status "Ho Chi Minh City · Open to senior creative roles".
- **Proof strip:** 8+ Years making the work · 10+ People in the team I built · Idea → real life Tools I
  build and ship myself · Fast AI built into the workflow. (2026-10-25, Ethan: no channel stat
  anywhere, and say he vibecodes without the word "vibecode". Retired: "300K → 1M Mike Dee's
  channel, the year I helped" and "3 Systems I built". The Mike Dee fact stays in profile.md.)
- **Systems and How I work: cut, same day.** Ethan: "why are we explain the projexts again? just
  keep the portfolio short". The projects live on the map and in their windows. How I work
  became one line in the note card, with links to the How I think and Tool tests notes.
- **Page order:** map hero → proof strip → what I do → about note → contact. Nav: Work · About ·
  Contact.
- **`what-i-do.md`, "Three ways to work together."** Shape the idea · Make the work · Build the
  system. Rates on request.
- **`about-me.txt` note card:**
  - "I started in the edit."
  - "Then I built a team of 10+, and the workflows it ran on."
  - "Now I own a pipeline end to end, and I know the stack under it: Claude Code, GitHub, Vercel,
    Supabase."
  - "Every job starts with one question: what is this actually for?"
  - Highlighted: "I care about what we build, why we build it, and how we bring it to life."
  - Links: How I think · Tool tests
- **`contact.md`:** "Tell me what you're making." "A senior role, a production or an edit. Start
  here."

The sections below record earlier versions.

## Nav (fixed)
Logo "Ethan." · Work (opens Finder) · Systems · Approach · About · Contact · live timecode (teal).

## Word budget
The page below the hero runs about 480 words (down from about 1,360 on 2026-10-08). Depth lives
in windows: every video in Finder, the full point of view and the full tool tests as notes.
Say each idea once. Before adding a line, check it isn't already said in another section.

## Hero `#top` · Status: map hero, needs sign-off
The first screen is the live 3D map (`studio/index.html?embed=1&bg=none`, plus `&quality=low` on
phones), with a transparent background so the Ember ombre shows through. The headline sits in a
band above it: the copy on the left, the buttons on the right (stacked on phones). See
`positioning.md`. Until the map loads, three cards stand in: "Research · Tool tests · Same
brief, head to head", "AI work · 3 · AI systems, directed end to end", "Video production · 8+ ·
Years in production". Clicking an area on the map opens its work: AI work opens the AI Systems
folder, video production opens the four production folders, research opens the Tool tests note.
- Eyebrow: "Trung (Ethan) Truong · Creative Direction · Ho Chi Minh City" (was "· Creative
  Direction & Production Systems" until 2026-10-25)
- H1: "What is this video **actually for**?" + "Start with the problem. The people, the tools and
  the cut follow from it." Picked 2026-10-25 when Ethan dropped AI as the pitch. It comes from his
  own POV line: "I don't start with a tool. I start with a question: what is this video actually
  for?"
  - The headline before that was "Where does AI belong in your video?" + "AI has a defined place
    in it. The standard doesn't move." (2026-10-08).
  - Before that, the first-person "I own the video pipeline end to end.", which Ethan found too
    self-focused.
- Status, under the buttons: "Open to senior creative roles and select projects". It replaced the
  map hint ("Click an area on the map to open its work") on 2026-10-25 when Ethan found the hero
  too crowded. On the map, the hero hides the map's own KPI strip and the hub's "One standard"
  tag, and the area cards open on Video production.
- CTAs, right of the headline: "Browse the work" (opens Finder) · "Get in touch".
- Sub "Script to final master, end to end." dropped on 2026-10-25 to make room for the dashboard
  (the idea is said again in What I Do and About).
- Desktop (icons, folders, dock): removed 2026-10-25. The videos stay in Finder; How I think opens
  from the Approach section.

## Stat strip · Status: done
8+ Years in production · 10+ Team built & directed · Full Pipeline ownership · Both AI & real
production

## 01 — Systems `#systems` · Status: draft, needs sign-off
Label "01 — Systems · Directed end to end". H2: "Three systems, and the problem each one solves."
(Replaces the first-person "Systems I built, and what I changed when they broke.") Aside: "Every
video lives on the desktop above". Each column: cap, title, one line, one result, a "What changed"
line, tool tags, watch chips. The "What changed" lines come from the verified facts only.
1. Code-based animation pipeline: "Motion written as code, finished in Final Cut Pro. For UI
   walkthroughs, data viz and brand motion." Result: "Motion delivered solo, from brief to final
   master." What changed: "Without a proper brief, AI first passes land far from final. Jobs now
   start from a structured context package, so the first pass lands close."
2. Avatar video at volume: "One approved face and voice, consistent across markets, with no
   weekly shoot." Result: "One founder, every market, without a shoot schedule." What changed:
   "At volume, AI artifacts slip through. QC now runs inline at every stage, with no separate
   review team."
3. End-to-end AI lesson: "A full language lesson built with an AI presenter and AI b-roll."
   Result: "A full lesson, no studio, no on-camera teacher." What changed: "A wrong line in a
   lesson teaches the wrong thing. Every line is now proofed against a teaching-accuracy bar
   before it ships."

## Desktop folders (Finder) · Status: draft, needs sign-off
Five folders. **AI Systems comes first everywhere** (top of the desktop column, first in Finder)
and is a red folder with a slow glow and a ✦, so visitors know it's the one to open. Each folder
shows its role, then one line. Motion & Explainers was removed on 2026-10-09.
- AI Systems · Director, end to end: "Each system was designed, directed and delivered end to
  end, and each one solves a specific production problem."
- Brand Film · Edit & planning: "The calls here are structure and pace: which story the footage
  holds, and what gets cut to tell it."
- Client & Story Work · Edit & planning: "Product, culture, community, testimonial. Every cut
  answers one question: what does this audience need to believe?"
- Video Advertisement · Edit & planning: "Conversion sets the standard here, not taste.
  Platform-native, and the first two seconds carry the whole thing."
- Long-form & Podcast · Edit & planning: "YouTube episodes and podcasts. At this length, pacing is
  the call that keeps the audience."

## Video windows
Kept short so the video is one tap away: title, the video, one line of description, one line of
facts (role · length · type or system), then "How this system works ↓" (AI videos, scrolls to the
Systems section) and "Watch on YouTube". Tools, results and "what changed" live only in the Systems
section.

## 02 — How I Choose Tools `#approach` · Status: draft, needs sign-off
Merges the old Tools I've Vetted and How I Think sections. "Slop or salvation. Both are wrong."
- Left: "I don't start with a tool. I start with a question: what is this video for? Then I test
  the tools head to head, same brief, and log where each one breaks." Pull quote: "AI gets you to
  80% fast. Knowing when 80% is the finish line is the difference between shipping and
  spinning." Buttons open the full notes.
- Right: seven one-line verdicts.
  01 Product → ad creatives: Full auto is hit or miss. The steerable mode ships.
  02 UGC actor ads: Works end to end. Logos garble on cheap tiers.
  03 A/B & localization: Where AI wins: test actors in parallel, localize cheap.
  04 Long-form → shorts: A repurposing accelerator, not an ad generator.
  05 Relighting & look-dev: Great for mood. Breaks on glass, liquid, hair and fast moves.
  06 Agent builders: They pick lazy defaults quietly. Output is only as good as the brief.
  07 When not to use AI: The hero film that has to be perfect.
- Full text, unchanged: `<template id="note-tests">` (the old intro + all 7 findings) and
  `<template id="note-pov">` (the locked POV in `positioning.md`). They open as desktop notes.

## 03 — What I Do `#about` · Status: draft, needs sign-off
Merges the old What I Do and About sections. "Define, own, deliver." Aside: "From the call to
the final master".
- Strategy: "What the video is for, then the tools. Sometimes the answer is no AI."
- Production: "Script to final master. One owner, no handoff gaps."
- Post: "Short-form, long-form, brand film, motion. Cut to land, on time."
- About: "I'm Trung, and most people call me Ethan. Eight years in production. I founded and ran
  a 10+ person multimedia agency, and today I own a full production pipeline end to end." +
  "Based in Ho Chi Minh City, working globally."

## Removed on 2026-10-08
- Breakaway band ("Want your video to look like that?"): it pointed at the old work grid. Its
  "straight production is welcome" job moved into the Contact line.
- The old About paragraph on AI as "one more tool on the bench": said again in Approach.

## 04 — Contact `#contact`
"Tell me what you're *making*." · "A senior role, a full production, or a straight edit. Start
here." · email button (copies to clipboard as fallback) · LinkedIn.

## Footer
© 2026 · Email · LinkedIn · Back to top.
