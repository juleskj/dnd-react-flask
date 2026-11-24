import { getModifier, formatBonus } from "../../utils/Cals";

const box =
  "bg-light-100  flex flex-col-reverse overflow-hidden rounded-[10px] border-2 border-main-300 text-center";
const boxLabel = "bg-main-100/60 py-1 text-xs uppercase tracking-widest";
const bigInput =
  "w-full flex-1 bg-transparent text-center text-4xl focus:outline-none";

function StatBox({ id, label, children }) {
  return (
    <label htmlFor={id} className={`${box} w-full bg-light-100`}>
      <span className={boxLabel}>{label}</span>
      {children}
    </label>
  );
}

function DeathSaveRow({ label, values, onToggle }) {
  return (
    <div className="flex items-center justify-between gap-3 ">
      <span className="text-xs uppercase tracking-widest">{label}</span>
      <div className="flex gap-2 ">
        {values.map((checked, i) => (
          <input
            key={i}
            type="checkbox"
            aria-label={`${label} ${i + 1}`}
            checked={checked}
            onChange={() => onToggle(i)}
            className={`checkboxBase size-5 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}

function CombatStats({
  combat,
  onCombatChange,
  deathSaves,
  onDeathSaveToggle,
  dexterityScore,
}) {
  const initiative = getModifier(dexterityScore);

  // digits only, so the user can't type letters
  const handleNumber = (e) =>
    onCombatChange(e.target.name, e.target.value.replace(/\D/g, ""));

  return (
    <section className="h-fit grid  gap-4">
      {/* AC, initiative, speed */}
      <div className="grid grid-cols-3 gap-4">
        <StatBox id="ac" label="Armor class">
          <input
            id="ac"
            name="ac"
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={combat.ac}
            onChange={handleNumber}
            className={`${bigInput} py-4`}
          />
        </StatBox>

        {/* calculated: DEX modifier */}
        <div className={box}>
          <span className={boxLabel}>Initiative</span>
          <output className="flex flex-1 items-center justify-center py-4 text-4xl">
            {formatBonus(initiative)}
          </output>
        </div>

        <StatBox id="speed" label="Speed">
          <input
            id="speed"
            name="speed"
            type="text"
            inputMode="numeric"
            maxLength={3}
            value={combat.speed}
            onChange={handleNumber}
            className={`${bigInput} py-4`}
          />
        </StatBox>
      </div>

      {/* Current HP, with max on top */}
      <div className={box}>
        <span className={boxLabel}>Current hit points</span>
        <input
          id="hpCurrent"
          name="hpCurrent"
          type="text"
          inputMode="numeric"
          maxLength={3}
          value={combat.hpCurrent}
          onChange={handleNumber}
          aria-label="Current hit points"
          className={`${bigInput} py-4 text-5xl bg-light-100`}
        />
        <label
          htmlFor="hpMax"
          className="bg-light-100 flex items-center justify-center gap-2 border-b-2 border-main-200 px-3 py-1 text-sm text-main-300"
        >
          Hit point maximum
          <input
            id="hpMax"
            name="hpMax"
            type="text"
            inputMode="numeric"
            maxLength={3}
            value={combat.hpMax}
            onChange={handleNumber}
            className=" w-16 border-b-2 border-main-200 bg-transparent text-center focus:outline-none"
          />
        </label>
      </div>

      {/* Temp HP */}
      <StatBox id="hpTemp" label="Temporary hit points">
        <input
          id="hpTemp"
          name="hpTemp"
          type="text"
          inputMode="numeric"
          maxLength={3}
          value={combat.hpTemp}
          onChange={handleNumber}
          className={`${bigInput} py-4 `}
        />
      </StatBox>

      {/* Hit dice + death saves */}
      <div className="flex flex-cols flex-wrap lg:flex-nowrap gap-4 ">
        <StatBox id="hitDice" label="Hit dice">
          <input
            id="hitDice"
            name="hitDice"
            type="text"
            placeholder="e.g. 3d8"
            maxLength={8}
            value={combat.hitDice}
            onChange={(e) => onCombatChange("hitDice", e.target.value)}
            className=" flex-1 bg-transparent py-4 text-center text-2xl placeholder:text-main-300/40 focus:outline-none"
          />
        </StatBox>

        <div className={`${box} justify-center w-full`}>
          <div className="flex flex-col gap-3 p-3 bg-light-100">
            <DeathSaveRow
              label="Successes"
              values={deathSaves.successes}
              onToggle={(i) => onDeathSaveToggle("successes", i)}
            />
            <DeathSaveRow
              label="Failures"
              values={deathSaves.failures}
              onToggle={(i) => onDeathSaveToggle("failures", i)}
            />
          </div>
          <span className={boxLabel}>Death saves</span>
        </div>
      </div>
    </section>
  );
}

export default CombatStats;
