# Madhu's Love Story

# Lovable Prompt — Romantic Birthday Website for Madhu

Copy everything in the code block below and paste it as your first message to Lovable.

```

Build a single-page romantic surprise website for my girlfriend's birthday.

It should feel like a slideshow of "scenes" — each scene is a full-screen

section, and clicking a button/element on one scene transitions to the next.

Use React state to control which scene is currently showing (not real URL

routing) so it feels like a smooth slide transition, not a page reload.

MOBILE REQUIREMENTS (important — this will be opened almost entirely on a

phone, so build mobile-first, not desktop-scaled-down):

- Design for a 375–430px wide viewport first, then let it scale up

- Use relative units (%, rem, dvh/dvw) instead of fixed pixel widths/heights

  so it works across different phone screen sizes

- Use `100dvh` instead of `100vh` for full-height scenes, since `100vh` breaks

  on mobile Safari/Chrome when the address bar shows/hides

- All buttons and tappable elements (envelope, gift box, flip cards, photo

  stack) must have a minimum tap target of 44x44px

- No hover-only interactions — everything must work with a tap, since there's

  no mouse on mobile

- Add proper viewport meta config so text isn't tiny and nothing requires

  pinch-zooming

- Avoid horizontal scroll/overflow on any scene at narrow widths

- Text should comfortably wrap and never overflow its container on small

  screens — test heading sizes at 375px width specifically

- Respect safe-area insets (for phones with notches) on top/bottom padding

THEME:

- Soft romantic palette: blush pink, peach, cream, with deep maroon/red for

  accent text and buttons

- Elegant script/serif font for headings, clean simple sans-serif for body text

- Floating heart particles drifting gently in the background on every scene

- Soft fade/slide-in animation when each scene appears

- No background music/audio player

Her name is "Madhu" (nickname "Jaan") — use it in the personalized scenes.

Build these 6 scenes in order:

1. HERO SCENE

   - Big warm greeting: "Hyy Jaan ❤️"

   - Short romantic subtext (write something genuine and heartfelt, 1-2 lines)

   - A button "Open Memories" that advances to Scene 2

2. PHOTO MEMORIES SCENE

   - Heading: "Some Sweet Moments" with subtext "(swipe the cards)"

   - A stacked polaroid-card gallery — build it with placeholder image frames

     (simple gray/blush boxes with a photo icon) since real photos will be

     added later. Make it swipeable/tappable to cycle through 5-6 placeholder

     cards, each with a small caption below the photo like "Celebrating you 🎉"

   - A "Next" button to advance to Scene 3

3. LETTER SCENE

   - Heading: "A Message From My Heart" with subtext "Tap the envelope to open"

   - A cute envelope illustration/icon (CSS or simple SVG) that on click/tap

     animates open (flap rotates, envelope scales up) and reveals a letter card

   - Letter card content:

     "Dear MADHU,

     your content"

   - (Note: literally use the placeholder text "your content" in the letter

     body — I'll replace it myself later)

   - A "Continue" button to advance to Scene 4

4. "WHY YOU'RE SPECIAL" SCENE

   - Heading: "Why You're Special 🎂" with subtext "Tap the cards to reveal why

     you're the best girlfriend"

   - A 3x3 grid of flip cards, each starting with a "?" on a pink gradient

     background. On narrow phone widths, make sure the 3-column grid still

     fits without overflow — shrink card font size and padding rather than

     letting the grid overflow horizontally

   - On click, each card flips to reveal a short, genuine, romantic one-line

     reason (write 9 different heartfelt lines — vary them, keep them specific-

     feeling rather than generic, e.g. about her smile, her laugh, how she

     makes ordinary days feel special, her strength, her kindness — but written

     like they're written by someone who actually knows her, not greeting-card

     filler)

   - A "Next" button to advance to Scene 5 (enabled once most/all cards are

     flipped, or just always enabled — your call for simplicity)

5. GIFT SCENE

   - Heading: "One Last Thing..." with subtext "Tap the gift"

   - A gift box icon/illustration that on tap animates (a little bounce/shake,

     then opens/bursts) and reveals a final surprise message card underneath

   - Message: a short, warm, genuine closing note (write this — 2-3 sentences,

     romantic and personal-feeling, mentioning it's her birthday and how much

     she's loved)

   - A "Continue" button to advance to Scene 6

6. FINAL SCENE

   - Heading: "I Love You, Jaan"

   - Closing line: "Happy Birthday. Here's to many more moments like these."

   - A "Back to Start" button that returns to Scene 1

INTERACTION NOTES:

- Every scene should have a subtle "swipe up" or button-based way to move

  forward — buttons are fine and simpler to get right on the first pass

- Keep transitions smooth (200-400ms fade/slide) — nothing jarring

- Keep the whole thing feeling handmade and intimate, not like a generic

  template — avoid stock-photo-style icons where possible, prefer simple

  custom shapes/illustrations built with CSS or basic SVG

Please scaffold all 6 scenes with working navigation first, and confirm it

renders cleanly at a 375px-wide mobile viewport before adding anything else.

I'll follow up with more detailed styling and content requests after this

first pass.

```

---

### Is this ready to paste? Yes — one prompt, one shot

This is written to be sent as a **single message**, ideally in Default Mode since it's a full scaffold request. Don't split it into multiple smaller messages — that burns more of your daily credits than one complete, well-specified prompt.

### After Lovable generates it — a 30-second mobile check

Once it's built, open the **preview link on your actual phone** (not just the desktop preview pane) and check:

- No horizontal scrolling on any scene

- Buttons are easy to tap with a thumb, not fiddly

- Text isn't cut off or overlapping on any scene

- The envelope/gift/flip-cards actually respond to a **tap**, not just a hover state

If something's off on phone specifically, tell me what you're seeing (a screenshot helps) and I'll write you a precise, single follow-up prompt to fix it — better to batch a fix request than to send Lovable a string of small guesses.

### Reminders from before, still true

- Photo frames are placeholders — swap in real photos later

- Letter scene keeps literal "your content" as requested

- The 9 "why you're special" lines are placeholders — send me real details about her whenever you're ready and I'll write ones that sound like you, not a template

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/93963269-04e0-4aaf-abd2-3ea4b7089ec6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
