import { getModifier, formatBonus } from "../../utils/Cals";

const checkboxBase = `
  shrink-0 cursor-pointer appearance-none border-2 border-main-300 bg-light-100
  checked:bg-main-300 checked:shadow-[inset_0_0_0_2px_white]
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-300
`;

function AbilityComp({
  ability,
  skills,
  score,
  onScoreChange,
  proficient,
  onToggle,
  proficiencyBonus,
}) {
  const shortAbility = ability.slice(0, 3);
  const modifier = getModifier(score);
  const bonusFor = (key) => modifier + (proficient[key] ? proficiencyBonus : 0);

  const savingKey = `${ability}-saving-throw`;

  return (
    <article className="grid grid-cols-2 gap-4 w-fit">
      <label
        className="mt-2.5 aspect-square w-35 h-35 flex flex-col border-2 border-main-300 text-center rounded-[10px]"
        htmlFor={`${shortAbility}-ability`}
      >
        {/* score: the only input */}
        <input
          className="mx-auto mb-1 -mt-2.5 bg-light-100 w-14 rounded-full border-2 border-main-300 text-center"
          id={`${shortAbility}-ability`}
          name={`${shortAbility}_ability`}
          type="text"
          inputMode="numeric"
          maxLength={2}
          value={score}
          onChange={(e) =>
            onScoreChange(ability, e.target.value.replace(/\D/g, ""))
          }
        />

        {/* modifier: calculated */}
        <div className="flex flex-1 items-center justify-center text-5xl">
          {formatBonus(modifier)}
        </div>
        <span className="bg-main-100/60">{ability}</span>
      </label>

      <div>
        <label
          htmlFor={`${shortAbility}-saving-throw`}
          className="flex flex-row items-center gap-2 text-xl! border-b-2 border-main-200 pb-2"
        >
          <input
            type="checkbox"
            id={`${shortAbility}-saving-throw`}
            name={`${shortAbility}_saving_throw`}
            checked={!!proficient[savingKey]}
            onChange={() => onToggle(savingKey)}
            className={`${checkboxBase} size-3.5 rotate-45`}
          />
          <span className="w-8 tabular-nums">
            {formatBonus(bonusFor(savingKey))}
          </span>
          <span className="first-letter:capitalize">Saving throw</span>
        </label>

        {skills.map((skill) => {
          const slug = skill.replaceAll(" ", "-");
          const key = `${ability}-${slug}`;
          return (
            <div key={skill} className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id={`${shortAbility}-${slug}`}
                name={`${shortAbility}_${slug}`}
                checked={!!proficient[key]}
                onChange={() => onToggle(key)}
                className={`${checkboxBase} size-4 rounded-full`}
              />
              <span className="w-8 tabular-nums">
                {formatBonus(bonusFor(key))}
              </span>
              <label
                htmlFor={`${shortAbility}-${slug}`}
                className="first-letter:capitalize"
              >
                {skill}
              </label>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default AbilityComp;
