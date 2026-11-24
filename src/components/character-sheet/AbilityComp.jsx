import { getModifier, formatBonus } from "../../utils/Cals";

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
    <article className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-[auto_1fr] gap-4 pb-2.5">
      <label
        className="bg-light-100 mt-2.5 aspect-square w-35 h-35 flex flex-col border-2 border-main-300 text-center rounded-[10px]"
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

      <div className=" w-full h-full mt-2.5 bg-light-100 p-2 rounded-[10px] bg-light-100  lg:bg-main-100/30 border-2 border-main-300">
        <label
          htmlFor={`${shortAbility}-saving-throw`}
          className="flex flex-row items-center gap-2  border-b-2 border-main-200 pb-2"
        >
          <input
            type="checkbox"
            id={`${shortAbility}-saving-throw`}
            name={`${shortAbility}_saving_throw`}
            checked={!!proficient[savingKey]}
            onChange={() => onToggle(savingKey)}
            className={`checkboxBase size-3.5 rotate-45`}
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
            <div
              key={skill}
              className=" flex flex-row items-center lg:items-start gap-1"
            >
              <input
                type="checkbox"
                id={`${shortAbility}-${slug}`}
                name={`${shortAbility}_${slug}`}
                checked={!!proficient[key]}
                onChange={() => onToggle(key)}
                className={`checkboxBase size-4 rounded-full`}
              />
              <span className="w-6 tabular-nums">
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
