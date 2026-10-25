# 3D pipeline diorama: build prompt

_Drafted 2026-10-25 from Ethan's coffee-shop template._ One prompt for one HTML file that does two
jobs: export a seamless 1080x1920 video loop, and run live in a desktop window on the site.

- **Colors and fonts** come from `index.html`: teal = AI / tech, amber = film craft, folder blue,
  the coral of the AI Systems folder, `--paper` off-white, Space Grotesk and IBM Plex Mono.
- **Stats** come only from `profile.md` and the live site: 8+ years in production, three AI
  systems directed end to end, and six use cases tested (Tool tests 01 to 06; 07 is "when not to
  use AI"). No project counts (retired, see `tone-and-voice.md`). Ethan to confirm.

```text
Build a single-file HTML page (HTML, CSS, JS) that renders a seamless looping 3D diorama of one city block on a loop street, with three districts along it: research, AI work and video production. One file does two jobs: it exports as a video, and it runs live inside a window on my portfolio site.

CONFIG (one object at the top of the script; URL params override size, quality and mode)
- duration: 10 (s), fps: 30, introDuration: 1.5 (s), seed: 42, intro: true
- size: 1080x1920 for export. ?w=&h= override it, e.g. ?w=1440&h=900 for the site window.
- zones, each a district with its own color and stat:
  - research: #4f9fe6 (blue), stat "6", label "use cases tested"
  - aiWork: #57cbbb (teal), stat "3", label "AI systems directed"
  - production: #e6a15b (amber), stat "8+", label "years in production"
- accent: #e8573f (coral), only on small moving bits: scooter parcels, LEDs, the REC light
- neutrals: background #f1ede6 (warm off-white), slab #e7e1d8, props in warm grays from #d9d3ca to #3a3633, text #1a1a1a
- fonts: Space Grotesk (title) and IBM Plex Mono (labels, numbers) from Google Fonts
- overlay title: "Ethan Truong", subtitle: "Research, AI work, video production. One pipeline."
- quality: "high" (GTAO on, 2048 shadow map). ?quality=low turns GTAO off and uses a 1024 shadow map.

Tech
- Three.js pinned to 0.169.0 through an import map from jsDelivr, mapping both "three" and "three/addons/".
- RoundedBoxGeometry for every block. MeshStandardMaterial only, flat colors, roughness 0.6 to 0.8.
- One directional sun with PCFSoftShadowMap shadows, its shadow camera fitted tight to the slab, plus a HemisphereLight.
- EffectComposer: RenderPass, then GTAOPass, then OutputPass. ACES Filmic tone mapping set on the renderer and applied once, by OutputPass.
- InstancedMesh for anything repeated more than 10 times (lane dashes, street lamps, corner-building windows, monitors, LEDs, code lines, people, trees, seats). Per-instance color with setColorAt.
- Renderer: antialias, preserveDrawingBuffer: true, pixel ratio 1, drawing buffer locked to CONFIG size.

Timeline
- Everything (objects, camera, overlay numbers, zone labels) is a pure function of one master time T. renderAt(T) called in any order, any number of times, gives identical pixels. No state carried between frames.
- No Date.now, no performance.now, no delta accumulation, no unseeded Math.random. A seeded RNG (mulberry32 with CONFIG.seed) is used once at startup for layout. The only exception: the autoplay loop reads the requestAnimationFrame timestamp to compute T, then calls renderAt(T).
- T from 0 to introDuration is the build-in. After that, loop time t = (T - introDuration) mod duration.
- window.renderAt(T) returns a Promise that resolves after the canvas and the HTML overlay have painted (wait two requestAnimationFrame ticks), so page screenshots include the overlay.
- window.TIMELINE = { introDuration, duration, fps, introFrames, loopFrames }. window.ready resolves after document.fonts.ready and the first render.
- Autoplay by default: the build-in once, then loop forever. ?export=1 turns autoplay off and waits for renderAt calls. ?intro=0 skips the build-in.

Loop
- At t = duration, every object and the camera are exactly back at their t = 0 state.
- Every periodic motion uses phase 2π·k·t/duration with integer k. Moving things follow closed paths (loops, ellipses, or back and forth with eased ends). No speed that doesn't divide the loop evenly.
- The seamless loop file is frames i = 0 … loopFrames - 1 at T = introDuration + i/fps. The frame at t = duration is never exported, because it equals frame 0.
- The build-in is separate from the loop, never inside it. Pieces rise from below the slab and pop to scale with slight overshoot (easeOutBack): the street and park first, from the center outward, then the districts one at a time in pipeline order (research, AI work, production).
- Overlay stats count up from 0 during the build-in, then hold their end values for the whole loop with a soft periodic pulse, so nothing jumps at the loop seam. With intro off, stats show end values from the first frame.

World
- A floating diorama on one rounded slab: a single city block wrapped by a one-way loop street. Packed with recognisable props built from simple shapes, with lots of small moving parts.
- The block is close to square (about 1 : 1.15), so it frames well in both portrait and landscape. The loop street is a rounded-square ring road with dashed lane markings, curbs, a curbside bike lane, sidewalks on both sides, street lamps, and three crosswalks.
- Inside the loop: a small park (trees, benches, crossing paths) that people walk through.
- Outside the loop: the three districts, one per side, in the order traffic reaches them. Research on the left side, AI work on the far side as the centerpiece, production on the right side. The near side stays open (trees, lamps, a bus stop) so the camera looks straight into the block.
- Every district building is a dollhouse cutaway: floor, walls cut to half height, no roof, open front facing the street, so the interior reads from above. Each district has awnings and a curb stripe in its zone color. Filler buildings with window grids sit on the four corners, their windows lighting up on and off.
- research (blue): a long desk with a row of identical monitors all showing the same frame (same brief, head to head). Under each monitor a small bar meter rises to a different height and settles. A wall of sticky notes in a grid, a desk lamp, and one person walking the row on a closed path.
- aiWork (teal): three stations, one per system.
  1. Code animation: a monitor with code lines scrolling up (instanced bars), beside a second screen where a shape travels along a motion curve.
  2. Avatar video: one presenter on a small stage in front of a ring light, inside a semicircle of small screens that all show the same face silhouette.
  3. AI lesson: a small classroom board with a presenter screen and rows of empty seats.
  Plus a render rack along the back wall with blinking coral LEDs.
- production (amber): a sound stage and an edit bay storefront.
  Stage: a camera on a dolly riding a closed rounded-rectangle track, a boom mic swinging gently, two softboxes, a C-stand, a curved backdrop, a monitor cart, a clapperboard that snaps once per loop, and a blinking coral REC light.
  Edit bay: a desk with two monitors and a timeline bar where a playhead sweeps once per loop, and a shelf of drives marked only by color.
- Traffic is the pipeline. Everything drives one way around the loop: research, then AI work, then production, and back.
  - 2 to 3 delivery scooters ride the bike lane carrying coral parcels. Each one eases to a stop at every district's curb, then pulls away. Its position along the loop is an eased periodic function of t that covers exactly one lap per loop.
  - 4 to 6 cars in warm neutrals and the zone colors drive the main lane at one constant speed, evenly spaced by arc length, an integer number of laps per loop, so they never touch.
- People: 6 to 10 on the sidewalks walking closed paths. Some cross at the crosswalks into the park and walk back.

Camera
- Isometric feel: perspective with a narrow FOV (about 25°), looking down at about 35° from the open near side, turned about 25° off square so no side of the block looks flat.
- A gentle eased swing, not a full orbit: yaw sways ±15° on a sine, and a push-in of about 10% eases back, both completing exactly once per loop. All three districts stay readable in every frame.
- Frame the slab by its bounding sphere in the space the overlay card leaves free, for any aspect.

Style
- Clean isometric product render. No textures, no 3D text, no logos. Soft contact shadows from GTAO. Coral used sparingly.

Overlay (HTML over the canvas, scaled with it)
- One frosted-glass card: backdrop-filter blur(18px) saturate(1.4), white at about 60% opacity, 1px white rim, soft shadow. Top center in portrait, bottom left in landscape (over filler, never over a district).
- It reads as a small Mac window: three traffic-light dots and a title bar reading "pipeline.live" in IBM Plex Mono.
- Body: title and subtitle from CONFIG, then the three stats in a row, each with a dot in its zone color. Numbers in IBM Plex Mono; labels as small uppercase mono text.
- Zone labels: one small HTML pill per district (uppercase mono, zone color dot), pinned to a 3D anchor point and re-projected inside renderAt(T) so it tracks the camera exactly.

Frame and embed
- Canvas locked to CONFIG size, CSS-scaled to fit the window (contain), centered, no scrollbars, #f1ede6 around it.
- ?embed=1 (my site opens the page in an iframe): no margins, no pointer events on the canvas, autoplay pauses while document.hidden, and the camera holds still at its resting pose (only the world moves). ?camera=swing or ?camera=still overrides that.
- prefers-reduced-motion: render one still frame (end of the build-in, stats at final values) and don't autoplay.

Before you finish, check
- renderAt(introDuration) and renderAt(introDuration + duration) produce identical pixels.
- renderAt(5), then renderAt(2), then renderAt(5) gives the same frame both times at 5.
- No Math.random, Date.now or performance.now outside the autoplay loop.
- Every prop repeated more than 10 times is an InstancedMesh.
```
