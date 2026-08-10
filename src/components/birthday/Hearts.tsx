const HEARTS = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 7.3 + 3) % 96,
  size: 10 + ((i * 5) % 16),
  duration: 12 + ((i * 3) % 11),
  delay: -(i * 1.7) % 14,
  opacity: 0.25 + ((i % 4) * 0.12),
}));

export function Hearts() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {HEARTS.map((h, i) => (
        <span
          key={i}
          className="animate-float-heart absolute bottom-[-10%] text-rose"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            ["--heart-opacity" as string]: h.opacity,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}
