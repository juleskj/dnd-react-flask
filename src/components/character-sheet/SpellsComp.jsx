import AddButton from "../../components/AddButton";
const cell =
  "w-full rounded-md bg-main-100/40 px-2 py-1 focus:outline-2 focus:outline-main-300";

function SpellsComp({
  spellcasting,
  onChangeSpell,
  onRemoveSpell,
  onAddSpell,
}) {
  return (
    <section className="h-full bg-light-100 flex w-full  flex-col overflow-hidden rounded-[10px] border-2 border-main-300">
      <div className="h-full flex flex-col gap-2 overflow-x-auto p-4 bg-light-100">
        {[...spellcasting.spells]
          .sort((a, b) => a.level - b.level)
          .map((spell) => (
            <article
              key={spell.id}
              className="flex flex-row items-center gap-2"
            >
              <select
                aria-label="Spell level"
                value={spell.level}
                onChange={(e) =>
                  onChangeSpell(spell.id, "level", Number(e.target.value))
                }
                className="w-20 shrink-0 rounded-md bg-main-100/40 px-2 py-2 text-base sm:py-1"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((lvl) => (
                  <option key={lvl} value={lvl}>
                    Lvl {lvl}
                  </option>
                ))}
              </select>

              <input
                type="text"
                aria-label="Spell name"
                placeholder="Spell name"
                value={spell.name}
                onChange={(e) =>
                  onChangeSpell(spell.id, "name", e.target.value)
                }
                className={cell}
              />

              <button
                type="button"
                aria-label="Remove spell"
                onClick={() => onRemoveSpell(spell.id)}
                className="cursor-pointer text-main-300 hover:text-dark-100 h-5 w-5 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5 text-dark-100"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                  />
                </svg>
              </button>
            </article>
          ))}
        <span className="py-2"></span>
        <AddButton
          btnText="Add spell"
          type="button"
          onClick={() => onAddSpell(1)}
        />
      </div>
      <span className="bg-main-100/60 py-1 text-center text-xs uppercase tracking-widest">
        Spells
      </span>
    </section>
  );
}

export default SpellsComp;
