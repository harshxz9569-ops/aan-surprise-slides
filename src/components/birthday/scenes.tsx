import { useState } from "react";
import { Scene, SceneTitle, SceneSub, SceneButton } from "./Scene";

/* ---------------- Scene 1: Hero ---------------- */
export function HeroScene({ next }: { next: () => void }) {
  return (
    <Scene>
      <SceneTitle>Hyy Jaan ❤️</SceneTitle>
      <SceneSub>
        I made a little corner of the internet just for you today. Every bit of it
        is a small way of saying you make my world softer, warmer, better.
      </SceneSub>
      <SceneButton onClick={next}>Open Memories</SceneButton>
    </Scene>
  );
}

/* ---------------- Scene 2: Photos ---------------- */
const PHOTOS = [
  "Celebrating you 🎉",
  "That laugh of yours 😄",
  "Our little escape 🌸",
  "Late night talks 🌙",
  "Just us, being us 💗",
  "My favourite person 💫",
];

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-maroon/40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="M4 17l4.5-4.5 3.5 3.5 3-2.5L20 17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhotoScene({ next }: { next: () => void }) {
  const [index, setIndex] = useState(0);
  const cycle = () => setIndex((i) => (i + 1) % PHOTOS.length);

  return (
    <Scene>
      <SceneTitle>Some Sweet Moments</SceneTitle>
      <SceneSub>(swipe the cards)</SceneSub>

      <div className="relative h-[22rem] w-full max-w-[19rem]">
        {PHOTOS.map((caption, i) => {
          const pos = (i - index + PHOTOS.length) % PHOTOS.length;
          if (pos > 2) return null;
          return (
            <button
              key={caption}
              type="button"
              onClick={cycle}
              aria-label={`Photo: ${caption}. Tap for next`}
              className="absolute inset-0 rounded-2xl bg-card p-3 pb-10 shadow-soft transition-all duration-300 ease-out"
              style={{
                transform: `translateY(${pos * 12}px) rotate(${(pos - 1) * 3}deg) scale(${1 - pos * 0.05})`,
                zIndex: PHOTOS.length - pos,
                opacity: pos === 0 ? 1 : 0.9,
              }}
            >
              <div className="flex h-[15rem] w-full items-center justify-center rounded-xl bg-blush/70">
                <PhotoIcon />
              </div>
              <p className="mt-4 text-sm text-maroon">{caption}</p>
              <p className="mt-1 text-[0.7rem] text-muted-foreground">
                {i + 1} / {PHOTOS.length} · tap
              </p>
            </button>
          );
        })}
      </div>

      <SceneButton onClick={next}>Next</SceneButton>
    </Scene>
  );
}

/* ---------------- Scene 3: Letter ---------------- */
export function LetterScene({ next }: { next: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <Scene>
      <SceneTitle>A Message From My Heart</SceneTitle>
      <SceneSub>Tap the envelope to open</SceneSub>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open the letter"
        className="relative h-[9rem] w-[14rem] min-h-[44px] transition-transform duration-300 active:scale-95"
        style={{ marginTop: open ? "5rem" : "0", transition: "margin 400ms ease, transform 300ms ease" }}
      >
        <div className="absolute inset-0 rounded-xl bg-blush shadow-soft" />
        <div
          className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-xl gradient-card transition-transform duration-500"
          style={{
            transform: open ? "rotateX(-170deg)" : "rotateX(0deg)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />
        {!open && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg text-maroon">❤</span>
        )}
      </button>

      {open && (
        <article className="animate-scene-in w-full max-w-[22rem] rounded-2xl bg-card p-6 text-left shadow-soft">
          <h2 className="text-2xl text-maroon">Dear MADHU,</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground">
            your content
          </p>
          <p className="mt-4 text-right text-sm text-rose">— Always yours ❤</p>
        </article>
      )}

      <SceneButton onClick={next}>Continue</SceneButton>
    </Scene>
  );
}

/* ---------------- Scene 4: Why You're Special ---------------- */
const REASONS = [
  "Your smile shows up before your words do — and it fixes my whole day.",
  "Your laugh is loud, unfiltered, and my favourite sound on earth.",
  "You make a boring Tuesday feel like something worth remembering.",
  "You hold yourself together on hard days in a way I quietly admire.",
  "You're kind to people who can't do anything for you.",
  "You remember the tiny things I mention once and never expect me to notice.",
  "You argue with me and still hold my hand five minutes later.",
  "You make me want to be a slightly better version of myself.",
  "With you, even silence feels like home.",
];

function FlipCard({ text }: { text: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-label={flipped ? text : "Reveal reason"}
      className="relative aspect-[3/4] min-h-[44px] w-full [perspective:800px]"
    >
      <div
        className="flip-3d relative h-full w-full"
        style={{ transform: flipped ? "rotateY(180deg)" : undefined }}
      >
        <span className="backface-hidden absolute inset-0 flex items-center justify-center rounded-xl gradient-card text-xl font-semibold text-maroon shadow-soft">
          ?
        </span>
        <span
          className="backface-hidden absolute inset-0 flex items-center justify-center rounded-xl bg-card p-1.5 text-[0.55rem] leading-snug text-maroon shadow-soft sm:p-2 sm:text-[0.7rem]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {text}
        </span>
      </div>
    </button>
  );
}

export function SpecialScene({ next }: { next: () => void }) {
  return (
    <Scene>
      <SceneTitle>Why You're Special 🎂</SceneTitle>
      <SceneSub>Tap the cards to reveal why you're the best girlfriend</SceneSub>
      <div className="grid w-full max-w-[24rem] grid-cols-3 gap-2 sm:gap-3">
        {REASONS.map((r) => (
          <FlipCard key={r} text={r} />
        ))}
      </div>
      <SceneButton onClick={next}>Next</SceneButton>
    </Scene>
  );
}

/* ---------------- Scene 5: Gift ---------------- */
export function GiftScene({ next }: { next: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <Scene>
      <SceneTitle>One Last Thing...</SceneTitle>
      <SceneSub>Tap the gift</SceneSub>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open the gift"
        className={`relative h-[8.5rem] w-[8.5rem] min-h-[44px] active:scale-95 ${open ? "mt-10" : "animate-soft-bounce"}`}
      >
        <div
          className="absolute inset-x-0 top-6 bottom-0 rounded-lg gradient-card shadow-soft transition-transform duration-300"
          style={{ transform: open ? "translateY(6px)" : undefined }}
        />
        <div className="absolute inset-x-0 top-6 bottom-0 mx-auto w-4 bg-maroon/70" />
        <div
          className="absolute inset-x-0 top-2 h-8 origin-bottom rounded-md bg-rose shadow-soft transition-transform duration-500"
          style={{ transform: open ? "translateY(-2.5rem) rotate(-16deg)" : undefined }}
        />
        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xl">🎀</span>
      </button>

      {open && (
        <article className="animate-scene-in w-full max-w-[22rem] rounded-2xl bg-card p-6 shadow-soft">
          <p className="text-sm leading-relaxed text-foreground">
            Happy birthday, Madhu. I hope today feels as warm as you make every
            day feel for me. You're loved more than I can fit into words — today
            and every ordinary day after it.
          </p>
        </article>
      )}

      <SceneButton onClick={next}>Continue</SceneButton>
    </Scene>
  );
}

/* ---------------- Scene 6: Final ---------------- */
export function FinalScene({ restart }: { restart: () => void }) {
  return (
    <Scene>
      <span className="text-4xl">💖</span>
      <SceneTitle>I Love You, Jaan</SceneTitle>
      <SceneSub>Happy Birthday. Here's to many more moments like these.</SceneSub>
      <SceneButton onClick={restart}>Back to Start</SceneButton>
    </Scene>
  );
}
