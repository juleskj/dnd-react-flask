import { getModifier, formatBonus } from "../../utils/Cals";
import AddButton from "../../components/AddButton";

const linedPaper = `
  leading-7 bg-transparent resize-none focus:outline-none
  bg-[repeating-linear-gradient(transparent,transparent_calc(1.75rem_-_1px),var(--color-main-200)_calc(1.75rem_-_1px),var(--color-main-200)_1.75rem)]
`;

const cols =
  "grid grid-cols-[minmax(0,2fr)_4.5rem_2.5rem_4rem_minmax(0,2fr)_2rem] items-center gap-2";
const cell =
  "w-full rounded-md bg-main-100/40 px-2 py-1 focus:outline-2 focus:outline-main-300";
const head = "text-xs uppercase tracking-widest text-main-300";

function AttacksComp({
  attacks,
  onAttackChange,
  onAddAttack,
  onRemoveAttack,
  scores,
  proficiencyBonus,
  notes,
  onNotesChange,
  ABILITIES,
}) {
  return (
    <section className="h-fit bg-light-100 flex w-full max-w-2xl flex-col overflow-hidden rounded-[10px] border-2 border-main-300">
      <div className="flex flex-col gap-2 overflow-x-auto p-4">
        <div className={`${cols} min-w-[34rem]`}>
          <span className={head}>Name</span>
          <span className={head}>Ability</span>
          <span className={`${head} text-center`}>Prof</span>
          <span className={`${head} text-center`}>Atk bonus</span>
          <span className={head}>Damage/type</span>
          <span />
        </div>

        {attacks.map((attack) => {
          const bonus =
            getModifier(scores[attack.ability]) +
            (attack.proficient ? proficiencyBonus : 0);

          return (
            <div key={attack.id} className={`${cols} min-w-[34rem]`}>
              <input
                type="text"
                aria-label="Attack name"
                value={attack.name}
                onChange={(e) =>
                  onAttackChange(attack.id, "name", e.target.value)
                }
                className={cell}
              />

              <select
                aria-label="Attack ability"
                value={attack.ability}
                onChange={(e) =>
                  onAttackChange(attack.id, "ability", e.target.value)
                }
                className={`${cell} uppercase`}
              >
                {ABILITIES.map(({ name }) => (
                  <option key={name} value={name}>
                    {name.slice(0, 3)}
                  </option>
                ))}
              </select>

              <input
                type="checkbox"
                aria-label="Proficient"
                checked={attack.proficient}
                onChange={() =>
                  onAttackChange(attack.id, "proficient", !attack.proficient)
                }
                className={`checkboxBase mx-auto size-4 rounded-full`}
              />

              {/* calculated */}
              <output className="text-center text-xl tabular-nums">
                {formatBonus(bonus)}
              </output>

              <input
                type="text"
                aria-label="Damage and type"
                placeholder="1d8+3 slashing"
                value={attack.damage}
                onChange={(e) =>
                  onAttackChange(attack.id, "damage", e.target.value)
                }
                className={`${cell} placeholder:text-main-300/40`}
              />

              <button
                type="button"
                aria-label="Remove attack"
                onClick={() => onRemoveAttack(attack.id)}
                className="cursor-pointer text-main-300 hover:text-dark-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    className="text-dark-100"
                    fill="currentcolor"
                    d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                  />
                </svg>
              </button>
            </div>
          );
        })}
        <AddButton
          btnText="Add attack"
          type="button"
          onClick={onAddAttack}
        ></AddButton>
      </div>

      <textarea
        aria-label="Attacks and spellcasting notes"
        rows={6}
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        className={`${linedPaper} px-4`}
      />
      <span className="bg-main-100/60 py-1 text-center text-xs uppercase tracking-widest">
        Attacks &amp; spellcasting
      </span>
    </section>
  );
}

export default AttacksComp;
