import { useState } from "react";
import { Scene, SceneTitle, SceneSub, SceneButton } from "./Scene";
const p1 = "/media/p1.jpg";
const p2 = "/media/p2.jpg";
const p3 = "/media/p3.jpg";
const p4 = "/media/p4.jpg";
const p5 = "/media/p5.jpg";
const p6 = "/media/p6.jpg";
const giftVideo = "/media/gift.mp4";

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
  { src: p1, caption: "Celebrating you 🎉" },
  { src: p2, caption: "That laugh of yours 😄" },
  { src: p3, caption: "Our little escape 🌸" },
  { src: p4, caption: "Late night talks 🌙" },
  { src: p5, caption: "Just us, being us 💗" },
  { src: p6, caption: "My favourite person 💫" },
];


export function PhotoScene({ next }: { next: () => void }) {
  const [index, setIndex] = useState(0);
  const cycle = () => setIndex((i) => (i + 1) % PHOTOS.length);

  return (
    <Scene>
      <SceneTitle>Some Sweet Moments</SceneTitle>
      <SceneSub>(swipe the cards)</SceneSub>

      <div className="relative h-[22rem] w-full max-w-[19rem]">
        {PHOTOS.map(({ src, caption }, i) => {
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
              <div className="h-[15rem] w-full overflow-hidden rounded-xl bg-blush/70">
                <img
                  src={src}
                  alt={caption}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
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
        style={{ transform: open ? "scale(1.04)" : undefined }}
      >
        <div className="absolute inset-0 rounded-xl bg-blush shadow-soft" />
        <div
          className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-xl gradient-card transition-all duration-500"
          style={{
            transform: open ? "scaleY(0.05)" : "scaleY(1)",
            opacity: open ? 0 : 1,
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
          <p className="mt-3 whitespace-pre-line text-[0.8rem] leading-[1.6] text-foreground">
            {`Happy Birthday, my Jaan ❤️

I don't think I'll ever be able to put into words how much I love you. We started as friends, and somehow, you became the most important person in my life. It's been almost a year since we've been together, and honestly, having you as my partner has changed my life in ways I never expected.

I love your smile, your eyes, your lips… but more than anything, I love simply listening to you talk about your day. Even the smallest things feel special when they come from you.

I know I'm not a perfect boyfriend, and I know there are times when I could be better. But I promise you, Jaan, I'll always try my best for you. I want to grow with you, make you happy, stand beside you, and be there for you through everything.

I don't just want you in my life today. I want to marry you one day and build a life with you. ❤️

Thank you for being my person, my happiness, and my Jaan. I love you more than I could ever explain.

Happy Birthday, my love. ❤️`}
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
  "Your smile can turn even my worst day into a good one.",
  "I could get lost in your eyes and still never want to find my way out.",
  "I love hearing about your day, even the little things. I could listen to you forever.",
  "Somehow, my girlfriend became my favorite person, my comfort, and my home.",
  "Ever since you became my partner, life has felt completely different—in the best way.",
  "I don't love some perfect version of you. I love you, exactly as you are.",
  "I know I'm not a perfect boyfriend, but I'll always keep trying to become better for you.",
  "I don't just want memories with you. I want a whole life with you.",
  "Happy Birthday, my Jaan. My only wish is to be beside you for every birthday that comes after this one. ❤️",
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
          style={{ transform: open ? "translateY(-1.5rem) rotate(-14deg)" : undefined }}
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
          <div className="mt-4 overflow-hidden rounded-xl bg-blush/70">
            <video
              src={giftVideo}
              autoPlay
              loop
              muted
              playsInline
              className="block h-auto w-full object-cover"
            />
          </div>
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
