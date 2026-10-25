# 3D pipeline diorama: build prompt

_Drafted 2026-10-25 from Ethan's coffee-shop template; Saigon rework the same day (his notes: Saigon landmarks, lighting per area, research as papers, a hologram, a crane, long walks, more boats)._ One prompt for one HTML file that does two
jobs: export a seamless 1080x1920 video loop, and run live in a desktop window on the site.

- **Colors and fonts** come from `index.html`: teal = AI / tech, amber = film craft, folder blue,
  the coral of the AI Systems folder, `--paper` off-white, Space Grotesk and IBM Plex Mono.
- **Stats** come only from `profile.md` and the live site: 8+ years in production, three AI
  systems directed end to end, and six use cases tested (Tool tests 01 to 06; 07 is "when not to
  use AI"). No project counts (retired, see `tone-and-voice.md`). Ethan to confirm.

```text
Build a single-file HTML page (HTML, CSS, JS) that renders a seamless looping 3D diorama of one Saigon city block on a loop street, with three districts along it: research, AI work and video production. One file does two jobs: it exports as a video, and it runs live inside a window on my portfolio site.

CONFIG (one object at the top of the script; URL params override size, quality and mode)
- duration: 60 (s, the full loop), beat: 10 (s; traffic and small moves repeat every beat), fps: 30, introDuration: 1.5 (s), seed: 42, intro: true
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
- InstancedMesh for anything repeated more than 10 times (lane dashes, street lamps, tower floor bands, binders, motorbike parts, LEDs, LED-wall tiles, code lines, people, trees, seats, stools). Per-instance color with setColorAt.
- Renderer: antialias, preserveDrawingBuffer: true, pixel ratio 1, drawing buffer locked to CONFIG size.

Timeline
- Everything (objects, camera, overlay numbers, zone labels) is a pure function of one master time T. renderAt(T) called in any order, any number of times, gives identical pixels. No state carried between frames.
- No Date.now, no performance.now, no delta accumulation, no unseeded Math.random. A seeded RNG (mulberry32 with CONFIG.seed) is used once at startup for layout. The only exception: the autoplay loop reads the requestAnimationFrame timestamp to compute T, then calls renderAt(T).
- T from 0 to introDuration is the build-in. After that, full-loop time tf = (T - introDuration) mod duration, and beat time t = tf mod beat. Walkers and boats use tf; everything else uses t.
- window.renderAt(T) returns a Promise that resolves after the canvas and the HTML overlay have painted (wait two requestAnimationFrame ticks), so page screenshots include the overlay.
- window.TIMELINE = { introDuration, duration, beat, fps, introFrames, loopFrames }. window.ready resolves after document.fonts.ready and the first render.
- Autoplay by default: the build-in once, then loop forever. ?export=1 turns autoplay off and waits for renderAt calls. ?intro=0 skips the build-in.

Loop
- At t = duration, every object and the camera are exactly back at their t = 0 state.
- Every periodic motion uses phase 2π·k·t/beat or 2π·k·tf/duration with integer k. Moving things follow closed paths (loops, ellipses, or back and forth with eased ends). No speed that doesn't divide the loop evenly.
- The seamless loop file is frames i = 0 … loopFrames - 1 at T = introDuration + i/fps. The frame at t = duration is never exported, because it equals frame 0.
- The build-in is separate from the loop, never inside it. Pieces rise from below the slab and pop to scale with slight overshoot (easeOutBack): the street and park first, from the center outward, then the districts one at a time in pipeline order (research, AI work, production).
- Overlay stats count up from 0 during the build-in, then hold their end values for the whole loop with a soft periodic pulse, so nothing jumps at the loop seam. With intro off, stats show end values from the first frame.

World
- A floating diorama on one rounded slab: a stylised District 1 block in Saigon, wrapped by a one-way loop street. Packed with recognisable props built from simple shapes, with lots of small moving parts. No text, no logos, no signage anywhere.
- The block is close to square (about 1 : 1.15). The loop street is a rounded-square ring road with dashed lane markings, curbs, a curbside bike lane, sidewalks on both sides, street lamps, and three crosswalks.
- Inside the loop: the square in front of the Notre-Dame Cathedral Basilica (red brick, two slate spires, a rose window, a small white statue in front) with the Saigon Central Post Office behind it (long ochre hall, barrel roof, clock, green arched windows), trees and benches.
- Landmarks, low-poly silhouettes. The tall ones stand in the back corners, farthest from the camera: Landmark 81 (back left, a stepped bundle of glass towers, the tallest) and Bitexco (back right, a tapering bud with the helipad deck sticking out). The low ones stand in the front corners: Ben Thanh Market (front left, a long hall with the clock tower) and the Saigon Opera House (front right, cream facade with the big front arch). Tower floors light up in bands that switch on and off.
- The near side is the riverside: a promenade with tamarind trees, two street-food carts with umbrellas and low plastic stools, the bus stop, power poles with tangled wires, then the embankment and the Saigon River.
- The three districts, one per side: research on the left, AI work across the far side as the centerpiece, production on the right. Every district building is a dollhouse cutaway (half-height walls, no roof, open front) with awnings and a curb stripe in its zone color.
- research (blue), papers not screens: an open binder per test on the long desk, each with a stack of notes beside it that grows and settles (the tallest carries a coral tab); a wall of binder shelves along the back with colour-coded spines and books; a filing cabinet whose top drawer slides open and shut; a stand fan with a few loose sheets drifting in its breeze; a sticky-note wall; a meeting table with an open book and papers; people reading at the desk. No tool names anywhere.
- aiWork (teal): three stations, one per system.
  1. Code animation: a monitor with code lines scrolling up, beside a screen where a shape rides a motion curve.
  2. Avatar video: in the middle, one presenter as a teal hologram (see-through bust with a wireframe overlay, a light beam, rising scan rings, a soft shimmer) inside a semicircle of screens that all show the same face, plus a ring light and a camera.
  3. AI lesson: a board that writes itself, a presenter screen and rows of empty seats.
  Plus render racks with blinking coral LEDs.
- production (amber): a sound stage and an edit bay. Stage: a camera crane in the middle of the dolly loop (the arm sweeps and tilts, the camera stays level), a camera on a dolly riding a closed track, two cameras on tripods, an overhead truss with four fresnel lamps, two softboxes, a boom mic, a C-stand, a curved backdrop, an LED wall washing slowly through a Saigon-dusk gradient, a monitor cart, a clapperboard and a blinking coral REC light. Edit bay: a timeline with a sweeping playhead and a shelf of drives.
- Traffic, on the 10s beat: four cars at one constant speed; two swarms of motorbikes with helmeted riders in the gaps behind two of the cars, same speed, so nothing ever touches; delivery scooters with coral parcels in the bike lane, easing to a stop at each district.
- River traffic, on the full loop, in three lanes: a container ship (one slow crossing per loop), a dinner-cruise yacht with two decks of warm-lit windows (two crossings) and two water taxis (three crossings). Each sails off one end of the river and comes back in at the other; clipping planes at the river's ends (also applied to the AO pass's normal material) hide the wrap.
- People, on the full loop: long walks. One walker goes in at the near crossing, around the cathedral and past the Post Office, and back out; one walks up the research side, crosses to the bench by the cathedral and back; others walk the production side, the AI side and the promenade end to end. Before each crossing a walker waits at the curb for a real gap in the traffic, and start times are chosen so walkers never meet.

Lighting
- Late afternoon: a lower, warmer sun and a dimmer sky, so each district's own light shows.
- Research: warm tungsten desk lamps and point lights, amber pools of light on the floor.
- AI work: teal and cyan point lights from the hologram and the stations, teal pools.
- Production: two bright white spotlights from the truss onto the talent, a warm wash in front of the LED wall, a white pool on the set.
- Pools are additive radial gradients on the floor. Lights fade up with their district's build-in.

Camera
- Isometric feel: perspective with a narrow FOV (about 25°), looking down at about 32° (44° in portrait) from the open near side, turned about 25° off square so no side of the block looks flat.
- A gentle eased swing, not a full orbit: yaw sways ±15° on a sine, and a push-in of about 10% eases back, both completing exactly once per loop. All three districts stay readable in every frame.
- Frame the slab by its bounding sphere in the space the overlay card leaves free, for any aspect.

Style
- Clean isometric product render. No textures, no 3D text, no logos. Soft contact shadows from GTAO. Coral used sparingly.

Overlay (HTML over the canvas, scaled with it)
- One frosted-glass card: backdrop-filter blur(18px) saturate(1.4), white at about 60% opacity, 1px white rim, soft shadow. Top center in portrait, bottom left in landscape (over filler, never over a district). Hidden with ?embed=1, because the site's headline sits right above the window.
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
