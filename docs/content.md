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
- **Coming:** the hero becomes a desktop (see `positioning.md` and `../desktop/`). Pantone-style
  color or ombre background, no photos.

## Nav (fixed)
Logo "Ethan." · Work (opens Finder) · Systems · Approach · About · Contact · live timecode (teal).

## Word budget
The page below the hero runs about 480 words (down from about 1,360 on 2026-10-08). Depth lives
on the desktop: every video in Finder, the full point of view and the full tool tests as notes.
Say each idea once. Before adding a line, check it isn't already said in another section.

## Hero `#top` · Status: headline picked; background still open
A fixed 1440x900 desktop screen (390x950 on phones), scaled to fit. See `positioning.md`.
- Eyebrow: "Trung (Ethan) Truong · Creative Direction & Production Systems"
- H1: "Where does **AI** belong in your video?" + "AI has a defined place in it. The **standard**
  doesn't move." Picked 2026-10-08 from six neutral options: the headline from option 3, the
  second line and sub from option 6. Replaces the first-person "I own the video pipeline end to
  end." Ethan found it too self-focused.
- Sub: "Script to final master, end to end."
- CTAs: "Browse the work" (opens Finder) · "Get in touch"
- Status: "Ho Chi Minh City · Open to senior roles and select projects"
- Desktop: 4 loose videos, 2 notes (Tool tests, How I think), 6 folders, dock (Work, About,
  Contact, LinkedIn, Email).

## Stat strip · Status: done
8+ Years in production · 10+ Team built & directed · Full Pipeline ownership · Both AI & real
production

## 01 — Systems `#systems` · Status: step 3 (failure lines pending)
"Systems I built, and what I changed when they broke." Aside: "Every video lives on the desktop
above". Three columns, each: cap, title, one line, one result, tool tags, watch chips.
1. Code-based animation pipeline: "Motion written as code, finished in Final Cut Pro. For UI
   walkthroughs, data viz and brand motion." Result: "QC inline at every stage, no review team
   needed." ("Rebuilt around reusable components" was cut: not in the verified facts.)
2. Avatar video at volume: "One approved face and voice, consistent across markets, with no
   weekly shoot." Result: "One founder, every market, without a shoot schedule."
3. End-to-end AI lesson: "A full language lesson with an AI presenter and AI b-roll, every line
   proofed for teaching accuracy." Result: "A full lesson, no studio, no on-camera teacher."

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
