import { useState } from "react";

function YouDied() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="you-died-title"
      className="animate-death-fade motion-reduce:animate-none fixed inset-0 z-50 grid place-items-center bg-black/85"
    >
      {/* dark band across the middle, fading out at the sides */}
      <div className="absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 bg-linear-to-r from-transparent via-black to-transparent sm:h-64" />

      <div className="relative flex flex-col items-center gap-6 px-4 text-center">
        <h2
          id="you-died-title"
          className="animate-death-title motion-reduce:animate-none font-serif text-5xl font-bold uppercase tracking-[0.25em] text-red-700 [text-shadow:0_0_30px_rgb(185_28_28/0.7)] sm:text-7xl md:text-9xl"
        >
          You died
        </h2>

        <p className="animate-death-title motion-reduce:animate-none text-sm uppercase tracking-widest text-red-950">
          Three failed death saves
        </p>

        <button
          type="button"
          autoFocus
          onClick={() => setOpen(false)}
          className="animate-death-title motion-reduce:animate-none cursor-pointer rounded-md border-2 border-red-900 px-6 py-2 text-sm uppercase tracking-widest text-red-700 transition-colors hover:bg-red-900 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default YouDied;
