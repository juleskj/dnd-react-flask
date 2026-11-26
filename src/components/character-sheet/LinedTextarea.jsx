const linedPaper = `
  leading-7 bg-transparent resize-none focus:outline-none
  bg-[repeating-linear-gradient(transparent,transparent_calc(1.75rem_-_1px),var(--color-main-200)_calc(1.75rem_-_1px),var(--color-main-200)_1.75rem)]
`;

function LinedTextarea({ value, setValue, label }) {
  return (
    <div className=" h-full bg-light-100 flex w-full max-w-2xl flex-col overflow-hidden rounded-[10px] border-2 border-main-300">
      <textarea
        aria-label={label}
        rows={12}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${linedPaper} w-full  bg-light-100! px-4 h-full `}
      />

      <span className="bg-main-100/60! py-1 text-center text-xs uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default LinedTextarea;
