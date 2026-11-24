import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AbilityComp from "../components/character-sheet/AbilityComp";

import { getProficiencyBonus, formatBonus } from "../utils/Cals";

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

  const proficiencyBonus = getProficiencyBonus(level);

  const handleLevelChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setLevel(value === "" ? "" : Math.min(20, Number(value)));
  };

  const handleScoreChange = (ability, value) =>
    setScores((prev) => ({ ...prev, [ability]: value }));

  const handleToggle = (key) =>
    setProficient((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <MainLayout headerTitle="hello Character" color="teal">
      <h2>Character name</h2>

      <section>
        <label htmlFor="level">
          level
          <input
            id="level"
            name="level"
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={level}
            onChange={handleLevelChange}
          />
        </label>

        <div>
          proficiency bonus
          <output className="block text-2xl">
            {formatBonus(proficiencyBonus)}
          </output>
        </div>

        <label htmlFor="inspiration">
          <input
            id="inspiration"
            name="inspiration"
            type="checkbox"
            checked={inspiration}
            onChange={() => setInspiration((prev) => !prev)}
          />
          inspiration
        </label>
      </section>

      <section className="grid gap-4">
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
