# Sritan Pittala — Engineering Portfolio

A dependency-free static portfolio for GitHub Pages. No npm, build tools, API keys, or external fonts required.

## Preview locally
Double-click index.html, or run `python3 -m http.server 8000` from this folder and open http://localhost:8000.

## Publish on GitHub Pages
1. Create a GitHub repository (for example, `portfolio`).
2. Upload the CONTENTS of this folder to the repository root: index.html, styles.css, app.js, content.js and assets/. Do not upload the ZIP itself or nest everything inside another portfolio folder.
3. Open repository Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch, select main and /(root), then Save.
5. GitHub will show the published site URL on that settings page after deployment.

For a project repository, the URL is https://YOUR-USERNAME.github.io/portfolio/. For a repository named YOUR-USERNAME.github.io, the URL is https://YOUR-USERNAME.github.io/.
Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Customize
- `content.js`: umbrella names, project names, descriptions, contributions, and tools. Content is initialized from the supplied résumé; review before publishing.
- Each moon has its own bookmarkable hash URL. Hash routing works on GitHub Pages without server rewrites.
- Add images to assets/ and add `image: 'assets/your-photo.jpg'` and `imageAlt: 'Description'` to a project object. No project photos were supplied, so none are fabricated.
- Add extra technical detail to each project's `work` array. Suggested material: requirements, your design decisions, hand calculations, validation, and lessons learned. Only publish material you have permission to share.
- `app.js`: About page text and navigation behavior.
- `styles.css`: colors, sizes, and layout.
- Replace assets/resume.pdf to update the résumé. The supplied PDF is included unchanged and contains the contact information on your résumé.
- The orbit layout contains four collections. To add more, extend the radii, phases, satellite-radius arrays, planet styles, and overview fit in app.js/styles.css as well as content.js.

## Navigation
- Planets orbit the sun in overview; clicking one zooms in and reveals moon labels.
- The sun opens About. Moons open project pages.
- Wheel scrolling over the scene cycles through planets in either direction, including Overview as a fourth stop. Each wheel notch advances a stop; continuous trackpad momentum is grouped into one gesture.
- Previous/Next buttons and arrow keys do the same; Escape or Overview zooms out.
- Orbit motion continues during close-ups as the camera tracks the selected planet. Pause orbits stops it explicitly. OS reduced-motion preferences disable orbiting and camera interpolation by default.
- Mobile visitors can tap planets/moons, use Next/Previous, or swipe down to the project index.
- Project index provides conventional links to all projects and an exit from the wheel-controlled scene.

All links and asset paths are relative so the site works under a repository subdirectory. Nothing has been published automatically.

## Hover render cards
Hover a planet or moon, or focus it with Tab, to see its preview card. The scene continues orbiting. Move onto the card to keep it open; Escape or × closes it. On touch screens, tap a planet to focus it, then tap a moon to open the project.

To use your CAD render, put a PNG, JPG, or WebP in assets/ and add these fields to the corresponding planet or project in content.js:

    previewImage: 'assets/chassis-render.png',
    imageAlt: 'Isometric CAD render of the chassis and tube fixtures',

Planet cards use `description`; moon cards use `summary`. The empty image slot is intentionally labeled and is not a project render. Project-page photos still use `image` and `imageAlt`.

The constellation lines are decorative, not an astronomical sky map. The planetary illustration uses CSS, so it needs no external image downloads. The orbital ellipse ratio is 0.365, halfway between the previous two views.

## Planet surfaces and satellites
Planets and the sun use soft, blended CSS bands. Planets and round moons keep independent light/shadow layers that face the sun. All moons use the same angular speed (0.16 radians per second), with angles separated by 2π / moon count within each collection, so they remain evenly spaced. The orbital radii are 240, 460, and 690 scene units, with a wider satellite orbit around the largest planet. Collection labels sit above the planets.

Pause orbits pauses both planet and moon motion. Reduced-motion settings start the scene paused. The surfaces are decorative illustrations, not scientific planetary maps.

Planet diameters are 105, 73.5, and 55.5 scene pixels (75% of their previous sizes); moons are 18 pixels. The sun is 140 pixels. Orbit paths and label sizes remain unchanged.

## Orbital clearances
The latest planet diameters are 78, 55, and 42 scene pixels; moons are 14 pixels and the sun remains 140 pixels. Planet orbit radii are 390, 750, and 1110. Moon orbit radii are 140, 115, and 100. All paths use the same 0.365 projected vertical ratio. This provides nonintersecting satellite corridors and a minimum projected moon-to-sun edge clearance of 14.25 scene pixels, before the camera's uniform scale. Clearances concern the bodies, not text labels, glow, or deliberate background blur during zoom transitions.

## Current collection map
Formula SAE / Duke Motorsports (5 projects), Rinehart Racing (2), UUVs (3), Class Projects (4). The fourth orbit radius is 1470 scene units and its satellite radius is 120. New project pages contain only supplied titles and brief identification until you add details. Existing résumé-backed material is retained where relevant. “Mosasaurus” is the normalized display spelling of the supplied “Mozasaurus.”

The overview reserves approximately 48 CSS pixels at the viewport bottom for the dark-blue project index. Scroll over that section to scroll the page normally; wheel gestures are intercepted only inside the orbital scene. On very short screens, the scene keeps a 360-pixel minimum height; the Project index button remains a direct shortcut.

Typography uses Courier New, with Courier and monospace fallbacks. The font is requested from the visitor’s system, not bundled; devices without Courier New may show the fallback. Text uses a warm-gold palette with a muted gold for secondary labels. The original résumé PDF is unchanged.

## Earth and flight navigation
Earth is a fifth planet, opening About Me; its moon opens the résumé. The sun is now decorative. Clicking a project planet or its collection link launches a five-second illustrated flight, then opens a dedicated collection page with project links. Scrolling and arrow buttons still inspect all five planets and Overview. Direct project/moon links and the index remain shortcuts.

The flight uses a stylized two-stage rocket: side boosters separate first, then the core stage, then the capsule separates from the service section. A fade to black bridges launch and descent; capsule thrusters slow the descent, followed by touchdown on terrain matching the destination. Skip or Escape completes the trip immediately; reduced-motion users navigate directly. Animation is implemented locally in flight.js with canvas, without external assets. Direct collection URLs load immediately and browser Back/Forward do not replay the animation.

Current orbit radii: 390, 750, 1110, 1470, 1830. Satellite radii: 140, 115, 100, 120, 140. Earth diameter: 76 pixels. The overview fit includes all five orbital paths.

## SLS-inspired launch artwork
The launcher now follows the SLS Block 1 silhouette: orange core stage, two white segmented solid boosters, four core engine bells, white upper-stage adapter, and an Orion-style spacecraft with a launch-abort tower. The compressed visual sequence separates the solid boosters, then the abort tower, then the core stage, then the upper stage. The later capsule landing remains an imaginative portfolio transition, not an actual Orion landing profile. Reference: https://www.nasa.gov/space-launch-system-sls/

## Simplified intact launch
The entire SLS-inspired rocket now accelerates off the top of the screen with all stages, boosters, and the abort tower attached. Launch terrain is green to suggest Earth. Captions are Ignition, Liftoff, and Leaving Earth. The five-second journey, fade to black, destination-colored capsule landing, Skip, and reduced-motion handling are unchanged.

The landing overlay stays fully opaque until the router has rendered the destination. The route-ready event releases the overlay, preventing an intermediate flash of the solar system. Skip uses the same handoff.

Earth/About navigation now bypasses the flight animation. Its About page uses green Earth terrain. Planet hover previews activate within 36 screen pixels of the planet edge, using the nearest eligible planet and preserving direct moon previews. Proximity is refreshed while planets orbit, and the hover card stays in the corner.

The capsule now holds briefly after touchdown, then fades over the already-rendered destination over 650 ms. Skip remains immediate. Earth has decorative evergreen silhouettes. The launch tower and base are proportioned using NASA Mobile Launcher 1 dimensions (tower approximately 345 ft, base 158 ft wide) relative to a roughly 322-ft SLS; the rocket is reduced to 82% of its previous drawing scale. Reference: https://www.nasa.gov/humans-in-space/exploration-ground-systems/mobile-launcher/

Project pages now have direct collection-back links at both top and bottom. Collection-link flight animations are triggered only from the solar-system explorer; project return links explicitly bypass them. Tree trunks are confined to the bottom 24 pixels of the tree illustration. Planet labels are 16 scene pixels, moon labels 11.

## Steel Spaceframe case study
The #project/chassis route now renders a scroll-led 2026–2027 case study from spaceframe.js. It uses the supplied frame photograph and MATLAB plot without modifying their pixels. Sections reveal with IntersectionObserver; reduced-motion and unsupported-browser fallbacks show all sections. Normal document scrolling and direct collection-back links are preserved.

2026: target 1,800 N·m/degree; simulated 1,863 N·m/degree; measured mass 27.6 kg. 2027: 25.3 kg SolidWorks estimate, design in progress. Physical torsional stiffness testing is pending. The 8.3% comparison is explicitly CAD-estimated versus measured, not a verified production reduction. New narrative supersedes older generic chassis résumé bullets.

Next content to add: FEA screenshots and setup, 2026/2027 CAD renders, fixture assembly/detail CAD, and a definition of the MATLAB plot’s color scale and dashed reference lines.

Added supplied 2026 and 2027 SolidWorks CAD views and 2027 torsion URES displacement plot. Image files are preserved unmodified. MATLAB caption now explains fractional relative error normalized by rigid LLTD, percent conversion, 0.5/1/2% contours, 0.48–0.63 front RSD bounds, and vertical stiffness reference lines. Fixture narrative distinguishes 2026 floor/selected-upper-tube coverage from the intended all-node 2027 scheme. Explicit pending-image panels reserve space for 2026 torsion FEA and suspension-load results.

Manufacturing evidence update: 2026/2027 jigging images, selected print-tracker rows and user-reported approximate 50% assembly-time reduction. Node tracker omitted at the owner’s request. Original spreadsheets are not bundled.

Steel Spaceframe update: revised requirements heading, model inputs, ASA-CF selection experiment, torsional stiffness method, and 2026 iteration chart from Sim Results.xlsx I6:K56. Both tracker sections removed.

Steering Wheel case study: two manufactured generations; supplied CAD, machining, FEA and finished-wheel images. Gen 1 displayed load is 135 Nm, distinct from the stated 100 Nm design target. Driver/judge feedback is attributed to the owner’s account. Painted frame side view added to Spaceframe.

Steering wording refined: 0.5-inch carbon-fiber layup, exposed-wire grounding and hidden button-tab alignment, Gen 2 Molex wiring, serviceability headline, linked article quotation, and updated feedback. Requested explanatory notes removed.

Formula SAE collection: three landscape car photos crossfade every four seconds, with previous/next and pause controls. Reduced-motion preference disables autoplay; route changes clean up the timer.

Frogbot case study added from the supplied SHARK team portfolio. Personal attribution: buoyancy control and general mechanical-design support. Challenge goals are distinguished from documented prototype hardware; no mission completion or quantified test results claimed.

Frogbot outcomes updated: demonstrated submerging and floating, custom gasket development and ballast placement; wiring and remaining tasks unfinished. Added thanks to Dr. Tyler Van Buren and his University of Delaware lab. Formula SAE slideshow credits Hao Li.

Turtle & Mosasaurus case study added: modular configurations, personal mechanical responsibilities, paired fin servos, tail servo, silicone molding, and assembled-but-unwired status. Photos encoded as JPEG for page loading; original uploads retained separately.

Turtle joint details clarified: roll about the head-to-tail x-axis and yaw; rear turtle fins oriented 90 degrees to front fins, matching front/rear Mosasaurus configurations. Added rear-fin support CAD and printed-mold silicone-casting process.

## Custom Timing Gates
The `#project/timing-gates` case study covers mechanical design, beam-break operation, assembly and setup with Luhan Wang. Four supplied images are included. Validation is described as comparison against hand timers. Testing-photo captions identify Michelin’s proving grounds in Laurens, SC. Acknowledgments credit electrical subteam members Humza Choudry, Luhan Wang, and Brandon Ramirez for initiating the project and their electrical work.

## Jacking Bar
Custom story at #project/jacking-bar includes four supplied images, a user-supplied Formula car free-body diagram and equation image using d1, d2, W, N, and J, manufacturing scope, and testing outcome. The 1.5 target is distinguished from the 1.487 minimum in the supplied FEA plot. Rules reference: 2026 Formula SAE V1, VE.2.1, linked in the page.

Soot sensor: dedicated case study with seven supplied images and the project video link. Earth uses a locally stored illustrated map and a 36-second rotation, with pause and reduced-motion support.

Gravity car: dedicated case study with final photographs, CAD figures extracted from the report, dynamics model summaries, second-place result, and original lab report.

Sandtrap Vehicle: complete case study with CAD, build and results images, and an embedded MP4 test video.
