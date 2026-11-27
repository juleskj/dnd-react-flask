import { useState } from "react";

function YouDied() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="you-died-title"
      className="animate-death-fade motion-reduce:animate-none fixed inset-0 z-50 grid place-items-center overflow-hidden"
      style={{ backgroundColor: "rgb(0 0 0 / 0.85)" }}
    >
      {/* dark band across the middle, fading out at the sides */}
      <div
        className="absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 sm:h-64"
        style={{
          background:
            "linear-gradient(to right, transparent, rgb(0 0 0 / 0.9), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center gap-6 px-4 text-center">
        <h2
          id="you-died-title"
          className="animate-death-title motion-reduce:animate-none font-serif font-bold uppercase tracking-[0.25em] text-red-700"
          style={{
            fontSize: "clamp(3rem, 12vw, 8rem)",
            lineHeight: 1.1,
            textShadow: "0 0 30px rgb(185 28 28 / 0.7)",
          }}
        >
          You died
        </h2>

        <p className="animate-death-title motion-reduce:animate-none text-sm uppercase tracking-widest text-red-900">
          Three failed death saves
        </p>

        <button
          type="button"
          autoFocus
          onClick={() => setOpen(false)}
          className="animate-death-title motion-reduce:animate-none cursor-pointer rounded-md border-2 border-red-900 px-6 py-2 text-sm uppercase tracking-widest text-red-700 transition-colors hover:bg-red-900 hover:text-dark-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default YouDied;
