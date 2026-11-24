import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AbilityComp from "../components/character-sheet/AbilityComp";

import { getProficiencyBonus, formatBonus } from "../utils/Cals";
import CharacterInfo from "../components/character-sheet/CharacterInfo";

const ABILITIES = [
  { name: "strength", skills: ["athletics"] },
  { name: "dexterity", skills: ["acrobatics", "sleight of hand", "stealth"] },
  { name: "constitution", skills: [] },
  {
    name: "intelligence",
    skills: ["arcana", "history", "investigation", "nature", "religion"],
  },
  {
    name: "wisdom",
    skills: [
      "animal handling",
      "insight",
      "medicine",
      "perception",
      "survival",
    ],
  },
  {
    name: "charisma",
    skills: ["deception", "intimidation", "performance", "persuasion"],
  },
];
function Character() {
  const [level, setLevel] = useState(1);
  const [inspiration, setInspiration] = useState(false);
  const [scores, setScores] = useState(
    Object.fromEntries(ABILITIES.map(({ name }) => [name, "10"])),
  );
  const [proficient, setProficient] = useState({}); // e.g. { "strength-athletics": true }

  const [info, setInfo] = useState({
    class: "",
    background: "",
    playerName: "",
    race: "",
    alignment: "",
    xp: "",
  });

  const proficiencyBonus = getProficiencyBonus(level);

  const handleLevelChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setLevel(value === "" ? "" : Math.min(20, Number(value)));
  };

  const handleScoreChange = (ability, value) =>
    setScores((prev) => ({ ...prev, [ability]: value }));

  const handleInfoChange = (name, value) =>
    setInfo((prev) => ({ ...prev, [name]: value }));

  const handleToggle = (key) =>
    setProficient((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <MainLayout
      headerTitle="hello Character"
      color="teal"
      css="grid gap-4 bg-main-100/20 p-4 rounded-[10px]"
    >
      <div className="grid grid-cols-2 bg-light-100 border-2 border-main-300 rounded-[10px] p-2 ">
        {/* character name */}
        <label
          htmlFor="character-name"
          className="group flex w-full  flex-col-reverse "
        >
          <span className="mt-1 text-2xl uppercase tracking-[0.25em] text-main-300 transition-colors group-focus-within:text-main-400">
            Character name
          </span>
          <input
            id="character-name"
            name="character_name"
            type="text"
            max={50}
            placeholder="Give your character a name"
            className="w-full border-b-3 border-main-300 bg-transparent px-2 pb-1 text-4xl
            placeholder:text-main-300/40
            transition-colors focus:border-main-400 focus:outline-none"
          />
        </label>
        {/* character info, like class and race */}
        <CharacterInfo
          info={info}
          onInfoChange={handleInfoChange}
          level={level}
          onLevelChange={handleLevelChange}
        />
      </div>

      <section className="grid gap-4   rounded-[10px] w-fit">
        <section className="flex flex-col gap-2 p-2  rounded-[10px] bg-light-100 ">
          <div className="grid grid-cols-[auto_1fr] w-fit items-center ">
            <output className="bg-light-100 block text-2xl w-10 h-10 text-center place-content-center border-2 border-main-300 mr-2 rounded-[10px]">
              {formatBonus(proficiencyBonus)}
            </output>
            Proficiency bonus
          </div>

          <label
            htmlFor="inspiration"
            className=" grid grid-cols-[auto_1fr] w-fit items-center "
          >
            <input
              className=" cursor-pointer appearance-none border-2 border-main-300 bg-light-100
              checked:bg-main-300 checked:shadow-[inset_0_0_0_4px_white]
              focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-main-300
              size-10 rounded-[10px] mr-2"
              id="inspiration"
              name="inspiration"
              type="checkbox"
              checked={inspiration}
              onChange={() => setInspiration((prev) => !prev)}
            />
            Inspiration
          </label>
        </section>
        {ABILITIES.map(({ name, skills }) => (
          <AbilityComp
            key={name}
            ability={name}
            skills={skills}
            score={scores[name]}
            onScoreChange={handleScoreChange}
            proficient={proficient}
            onToggle={handleToggle}
            proficiencyBonus={proficiencyBonus}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default Character;
