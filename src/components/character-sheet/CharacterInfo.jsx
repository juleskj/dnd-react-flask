const ALIGNMENTS = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
];

const fieldInput =
  "w-full border-b-2 border-main-200 bg-transparent px-1 pb-1 text-lg " +
  "transition-colors focus:border-main-400 focus:outline-none";

const fieldLabel = "text-xs uppercase tracking-widest text-main-300";

function Field({ id, label, children }) {
  return (
    <label htmlFor={id} className="flex flex-col-reverse gap-1">
      <span className={fieldLabel}>{label}</span>
      {children}
    </label>
  );
}

function CharacterInfo({ info, onInfoChange, level, onLevelChange }) {
  const handleChange = (e) => onInfoChange(e.target.name, e.target.value);

  return (
    <section className="grid w-full max-w-3xl grid-cols-1 gap-x-8 gap-y-6 rounded-[10px] lg:p-6 sm:grid-cols-3">
      {/* Class & level */}
      <Field id="class" label="Class & level">
        <div className="flex gap-2">
          <input
            id="class"
            name="class"
            type="text"
            value={info.class}
            onChange={handleChange}
            className={fieldInput}
          />
          <input
            id="level"
            name="level"
            type="text"
            inputMode="numeric"
            maxLength={2}
            aria-label="Level"
            value={level}
            onChange={onLevelChange}
            className={`${fieldInput} w-14 text-center`}
          />
        </div>
      </Field>

      <Field id="background" label="Background">
        <input
          id="background"
          name="background"
          type="text"
          value={info.background}
          onChange={handleChange}
          className={fieldInput}
        />
      </Field>

      <Field id="playerName" label="Player name">
        <input
          id="playerName"
          name="playerName"
          type="text"
          value={info.playerName}
          onChange={handleChange}
          className={fieldInput}
        />
      </Field>

      <Field id="race" label="Race">
        <input
          id="race"
          name="race"
          type="text"
          value={info.race}
          onChange={handleChange}
          className={fieldInput}
        />
      </Field>

      <Field id="alignment" label="Alignment">
        <select
          id="alignment"
          name="alignment"
          value={info.alignment}
          onChange={handleChange}
          className={fieldInput}
        >
          <option value="">Choose...</option>
          {ALIGNMENTS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>

      <Field id="xp" label="Experience points">
        <input
          id="xp"
          name="xp"
          type="text"
          inputMode="numeric"
          value={info.xp}
          onChange={(e) =>
            onInfoChange("xp", e.target.value.replace(/\D/g, ""))
          }
          className={fieldInput}
        />
      </Field>
    </section>
  );
}

export default CharacterInfo;
