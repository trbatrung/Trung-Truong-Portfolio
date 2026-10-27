# Portfolio V2: Audit and Plan (2026-10-26)

Ethan's brief: improve clarity, credibility and hiring effectiveness, keep the identity. North star:
**in 30 seconds, someone knows what he does, why he's valuable and what he's done, and remembers it.**
Work one phase at a time with his sign-off, update docs first, never invent facts (`positioning.md`).

> **Rule (Ethan, 2026-10-26): add, don't change.** "i like how the web look atm, and im not intend to
> change it, add more yes but not changing." Existing sections, their look and their copy stay as
> they are. New things are additions, in the same heyclicky style (Mac windows, filenames, chat
> bubbles). Invisible fixes (speed, accessibility) are fine. Ask him one question at a time.

## The 30-second test, today
| Question | What a visitor gets in 30s | Verdict |
|---|---|---|
| What does he do? | Eyebrow + H1 + "Research, film, motion and creative technology" | ✅ Clear |
| Why is he valuable? | "I build the work, and the systems behind it", the map | 🟡 Felt, not proven yet |
| What has he done? | Nothing without a click. The work sits behind the map and the boards | ❌ The gap |
| Can I hire him? | "Open to senior creative roles", but contact is at the very bottom, no CV, no freelance line | 🟡 Weak |

The map is the memorable part and stays. What's missing is a **short, scannable proof layer right
under it**: a few selected projects and the things he's built, each with role, decisions and outcome.

## Retain
- The map hero and glass-on-zoom, the boards, the Ember look, Mac windows, filenames as labels,
  chat bubbles, note cards. Short copy, sentence case, no em dashes.
- The credit rules: pre-AI work is edit & planning; the AI systems are full direction.
- Diagnosis as its own section.

## Improve
- **Proof strip.** "Fast · AI built into the workflow" and "Idea → real life" are claims without
  evidence. Swap for verified facts (e.g. "300K → 1M subscribers, Mike Dee, under a year").
- **Hiring path.** Contact and CV reachable from the first screen and from the nav on phones.
- **Role lines on the work.** Each featured project says role, what he decided, and the outcome.

## Simplify
- The skills block repeats what the featured work will show. Once featured work lands, it can shrink.
- Three ways into the same boards (map, tri control, "See" links) are fine; the nav's "Work"
  should go to the new featured section instead.

## Plan (one phase at a time, each signed off)

### Phase 1 · Hiring path (P0 · small)
_Answers (2026-10-26): CV as a web page · availability "Open to senior creative roles, in Ho Chi
Minh City or remote. Freelance projects welcome." · GitHub link not yet._
- Nav: a persistent **Contact** pill and a **CV** link; on phones, a compact menu (today the
  phone nav has no links at all).
- An availability line by the contact block: senior roles first, freelance welcome (wording from Ethan).
- **CV as a page** (`cv.html`), built from `profile.md`'s verified record and printable to PDF.
  The repo rule is never to publish PDFs, so a PDF download needs Ethan's explicit OK.

### Phase 2 · Selected work (P0 · medium)
_Dropped (2026-10-26). Built with his picks (code pipeline in 5D, Joe Schaeffer, Diagnosis, this
website), then pulled before it went live: "this is kind of redundant", since the map, the boards
and the skill blocks already carry the work. Reverted in `d3ff380`; the build is in `b592d55` if
it's ever wanted. Kept from it: his 5D framing (Discover · Define · Design · Develop · Deliver)._
_Picked by Ethan (2026-10-26): **code-animation pipeline · Mike Dee channel · Joe Schaeffer · this
website · Diagnosis**. Avatar video, Arrowhead/Nailzy and the AI Language Lesson stay on the boards.
This website and Diagnosis are featured here, so Phase 3 covers the rest of what he's built._
A "Selected work" section right after the hero: 4–6 Mac-window cards, each with
**role · what I decided · outcome**, opening the same video window as the boards. Shortlist to confirm:
1. **Code-based animation pipeline** (Edge8, full direction): Founder Intro, Install the Stack.
2. **Avatar video at volume** (Edge8, full direction): Executive Scale, Brand Presence.
3. **Mike Dee channel** (PM / video editor, team of 10): 300K → 1M subscribers in under a year.
4. **Arrowhead** (founder, 10+ team, 50+ projects): the Nailzy launch content rule set + ad.
5. **A brand film** (edit & planning): Joe Schaeffer, told through the edit's decisions.
6. **This website** (or it goes in phase 3).

### Phase 3 · Things I've built (P0 · medium)
A "Built" section, separate from client work: this site (3D map, three.js, glass, built with
Claude Code), Diagnosis (site + publication), the code-animation pipeline, context packages,
the Install-the-Stack walkthrough. Each: what it is, why, the stack, a link.

### Phase 3b · The map runs through the page (Ethan, 2026-10-26: "map elements go through the web, make it more unify")
_Built 2026-10-26, after three mocks:_
- _v1, a straight asphalt road in the margins: "i dont like its a straight line ... more, soft"; also "the map
  locations can reappear as 2D" and "full black is kinda not close"._
- _v2, a soft dotted line with line-drawn landmarks and area glows: "i want our style map apply straight
  to the line, not redraw it in lines"._
- _v3 (built): the landmarks are rendered from the 3D map itself. "Yes, this is it."_

What it is:
- It starts inside the map (Ethan: "the start need to be from the map, not a line start like that", then his
  sketch): a real street leaves the loop's near corner between the Post Office and the Opera House, with
  asphalt and lane dashes, and wraps down over the block's front edge. A tree and a food cart moved aside
  for it. There a soft dotted route takes over. It leaves the map from under the block's front corner and meanders down the page,
  under the content, to contact. A car from the map drives it as you scroll and lights the route behind it.
- Stops: Ben Thanh Market (Research), the riverside studio lot (Video production), Bitexco (AI work), the
  Independence Palace (Diagnosis), 42 Nguyen Hue (contact). Each is a cut-out rendered from the 3D map
  (`img/route/*.webp`, ~120KB in all) with a pin in its area color and a faint glow of that color, so
  the page isn't flat black below the hero.
- It never crosses the content (Ethan: "it kinda everywhere? ... make it less messy"). On wide screens it
  slips under the stats band to the left margin, rides the side margins, and changes sides only in the
  empty gaps between sections, along the dividers, with rounded turns. Stops sit in the margins.
- Narrower than 1100px the margins are too thin: the street leaves the map and the line ends under the
  stats band. No places or pins there, only the glows ("not working on mobile", 2026-10-26).
- Existing sections are untouched (add, don't change); the route sits under them.

### Phase 4 · Clarity pass (P1 · small)
Proof strip swap, hero sub-line check, Diagnosis context ("why an editor writes economic
analysis": research is a skill), "Founder Intro" label fix (still open).

### Phase 5 · Performance, accessibility, mobile (P1)
_Done 2026-10-26, the invisible part (Ethan: "nothing visual changes"):_
- _The map stops drawing when scrolled away or under the board: CPU 48% → 2% (scrolled), 0.4% (board)._
- _The map's post-processing files preload, so it loads in one wave; it shares the page's font request._
- _The board and phone sheets are `aria-modal` and lock the page behind (`inert`); focus returns to
  whatever opened them, the map included. Desktop video windows stay non-modal, as they float over
  a usable page._
- _A skip link (keyboard only) and a `<main>` landmark; keyboard focus rings on stickies and the Diagnosis card._
- _Reduced motion: no smooth scrolling, still dots, no board fade._
- _No WebGL or no CDN: a still of the map (`img/map-still.jpg`) instead of an empty hero._
- _Left for a visible pass, if Ethan wants it: contrast of the faint greys, phone label sizes and tap
  targets, the hero's reveal delay, a 30fps cap, a lower pixel ratio._
From the technical audit below. Fixes that don't touch the look. The map pause (perf 1) and the
phone nav (mobile 1) are small and high impact; they can jump the queue.

### Phase 6 · Polish (P2)
Microinteractions only where they help: hover states on the new cards, smoother board open/close,
discovery (filters or "featured" pins on the boards).

## Technical audit (measured in headless Chrome, 2026-10-26)
**Performance**
1. The map renders at 60fps forever, even scrolled away or under an open board: 43–60% of a CPU core
   on desktop. Pause it off-screen and under boards; cap at 30fps (it's built for 30). **Biggest win.**
2. Each frame is heavy: 2858×1800 canvas, MSAA + GTAO + soft shadows every frame,
   `preserveDrawingBuffer` always on. Cap desktop pixel ratio ~1.5; export-only buffer.
3. The map loads in two waves: 9 post-processing files aren't preloaded. Add them.
4. Fonts: ~300KB, render-blocking, Space Grotesk downloaded twice (page + map), Newsreader only used
   below the fold. Unify the font request; preload the headline font.
5. The H1 waits on the reveal animation (LCP 968ms desktop). Drop `.reveal` from the hero.
6. Video windows use 1280px `maxresdefault` thumbnails with no fallback; use smaller ones + fallback.
7. The nav timecode restyles a blurred bar 24×/s; pause it when not visible.

**Accessibility**
1. Video windows don't trap focus (no `aria-modal`, page behind not `inert`).
2. Focus is lost when a board opens from the map. No skip link, no `<main>`.
3. Contrast: window titles and dates at 2.3–3.5:1 on white; darken the greys.
4. Reduced motion: smooth scrolling, pulsing dots and the board fade aren't guarded.
5. No fallback if WebGL or jsDelivr fails: "Loading the map" for 8s, then an empty hero. Show a still.

**Mobile**
1. No nav on phones at all (links hidden ≤900px, nothing replaces them).
2. Labels at 7–9px (hero eyebrow, status, tri buttons, map pills). Floor at ~11px.
3. Tap targets 15–35px (map turn buttons, pills, note links). Pad to 44px.
4. The hero's 700px minimum height cuts the first screen on small phones.

## Needs Ethan (no guessing)
1. **Featured shortlist:** keep, swap or reorder the six above?
2. **For each pick, in your words:** what you decided, and what happened after (a number, a reaction,
   a result). Only what you can stand behind.
3. **CV:** an HTML page is fine? Or do you want a PDF download (an exception to the no-PDF rule)?
4. **Availability:** exact wording, e.g. "Open to senior creative roles · freelance from [month]".
5. **Built:** did you build the Diagnosis site yourself? Anything else to show (tools, scripts, experiments)?
6. **GitHub link** on the site: yes or no?
7. **Founder Intro label:** name EO Melbourne / AI Officer Institute, or just Edge8?
