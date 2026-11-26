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

// keys that need a nicer label than the raw key
const LABELS = { playerName: "Player name" };

// fields shown as plain inputs when the level/xp/alignment block is on
const MAIN_FIELDS = ["class", "background", "playerName", "race"];

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

  // level is "" while the user is typing, so test for undefined, not falsiness
  const hasLevel = level !== undefined;

  const fields = hasLevel
    ? MAIN_FIELDS.filter((key) => key in info)
    : Object.keys(info);

  return (
    <section className="grid w-full max-w-3xl grid-cols-1 gap-x-8 gap-y-6 rounded-[10px] sm:grid-cols-3 lg:p-6">
      {hasLevel && (
        <>
          <Field id="xp" label="Experience points & level">
            <div className="flex gap-2">
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
        </>
      )}

      {fields.map((key) => (
        <Field id={key} label={LABELS[key] ?? key} key={key}>
          <input
            id={key}
            name={key}
            type="text"
            value={info[key]}
            onChange={handleChange}
            className={fieldInput}
          />
        </Field>
      ))}
    </section>
  );
}

export default CharacterInfo;
