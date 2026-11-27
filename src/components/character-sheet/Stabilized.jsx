import { useState } from "react";

const COLORS = [
  "#facc15",
  "#f97316",
  "#ec4899",
  "#22d3ee",
  "#a78bfa",
  "#4ade80",
];

// random values are created once, so the confetti doesn't jump around on re-renders
const makeConfetti = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 6 + Math.random() * 8,
    color: COLORS[i % COLORS.length],
    duration: 3 + Math.random() * 3,
    delay: -Math.random() * 6, // negative delay: the confetti is already falling when it appears
    drift: Math.round((Math.random() - 0.5) * 200),
    round: Math.random() > 0.7,
  }));

function Stabilized() {
  const [open, setOpen] = useState(true);
  const [confetti] = useState(() => makeConfetti(60));

  if (!open) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="stabilized-title"
      className="animate-death-fade motion-reduce:animate-none fixed inset-0 z-50 grid place-items-center overflow-hidden bg-dark-100/70"
    >
      {/* confetti */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 motion-reduce:hidden"
      >
        {confetti.map((p) => (
          <span
            key={p.id}
            className={`animate-confetti-fall absolute top-0 block ${p.round ? "rounded-full" : ""}`}
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.round ? p.size : p.size * 0.6,
              backgroundColor: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}px`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-6 px-4 text-center">
        <h2
          id="stabilized-title"
          className="animate-success-pop motion-reduce:animate-none bg-linear-to-b from-yellow-200 to-amber-500 bg-clip-text font-serif text-5xl font-bold uppercase tracking-[0.2em] text-transparent [filter:drop-shadow(0_0_20px_rgb(250_204_21/0.5))] sm:text-7xl md:text-9xl"
        >
          Stabilized
        </h2>

        <p className="animate-success-pop motion-reduce:animate-none text-sm uppercase tracking-widest text-amber-200">
          Three successful death saves
        </p>

        <button
          type="button"
          autoFocus
          onClick={() => setOpen(false)}
          className="animate-success-pop motion-reduce:animate-none cursor-pointer rounded-md border-2 border-amber-400 px-6 py-2 text-sm uppercase tracking-widest text-amber-300 transition-colors hover:bg-amber-400 hover:text-dark-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Stabilized;
