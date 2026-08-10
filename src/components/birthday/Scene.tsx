import type { ReactNode } from "react";

export function Scene({ children }: { children: ReactNode }) {
  return (
    <section className="animate-scene-in scene-pad relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center gap-5 text-center">
      {children}
    </section>
  );
}

export function SceneTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="max-w-[22ch] text-balance text-4xl font-semibold leading-tight text-maroon sm:text-5xl">
      {children}
    </h1>
  );
}

export function SceneSub({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[34ch] text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
      {children}
    </p>
  );
}

export function SceneButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-[44px] min-w-[44px] rounded-full bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-primary-foreground shadow-soft transition-transform duration-200 active:scale-95"
    >
      {children}
    </button>
  );
}
