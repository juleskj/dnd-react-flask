import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AbilityComp from "../components/character-sheet/AbilityComp";
import CombatStats from "../components/character-sheet/CombatStats";

import { getProficiencyBonus, formatBonus } from "../utils/Cals";
import CharacterInfo from "../components/character-sheet/CharacterInfo";

import AttacksComp from "../components/character-sheet/AttacksComp";
import EquipmentComp from "../components/character-sheet/EquipmentComp";
import LinedTextarea from "../components/character-sheet/LinedTextarea";

const linedPaper = `
  leading-7 bg-transparent resize-none focus:outline-none
  bg-[repeating-linear-gradient(transparent,transparent_calc(1.75rem_-_1px),var(--color-main-200)_calc(1.75rem_-_1px),var(--color-main-200)_1.75rem)]
`;

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

  // combatstats

  const [combat, setCombat] = useState({
    ac: "",
    speed: "",
    hpMax: "",
    hpCurrent: "",
    hpTemp: "",
    hitDice: "",
  });
  const [deathSaves, setDeathSaves] = useState({
    successes: [false, false, false],
    failures: [false, false, false],
  });

  const handleCombatChange = (name, value) =>
    setCombat((prev) => ({ ...prev, [name]: value }));

  const handleDeathSaveToggle = (type, index) =>
    setDeathSaves((prev) => ({
      ...prev,
      [type]: prev[type].map((v, i) => (i === index ? !v : v)),
    }));

  // attack comp and equipment
  const newAttack = () => ({
    id: crypto.randomUUID(),
    name: "",
    ability: "strength",
    proficient: true,
    damage: "",
  });

  const [attacks, setAttacks] = useState([
    newAttack(),
    newAttack(),
    newAttack(),
  ]);
  const [attackNotes, setAttackNotes] = useState("");
  const [coins, setCoins] = useState({
    cp: "",
    sp: "",
    ep: "",
    gp: "",
    pp: "",
  });
  const [equipment, setEquipment] = useState("");

  const [personalityTrait, setPersonalityTrait] = useState("");
  const [ideals, setIdeals] = useState("");
  const [bonds, setBonds] = useState("");
  const [flaws, setFlaws] = useState("");

  const handleAttackChange = (id, field, value) =>
    setAttacks((prev) =>
      prev.map((a) => (a.id === id ? { ...a, [field]: value } : a)),
    );
  const handleAddAttack = () => setAttacks((prev) => [...prev, newAttack()]);
  const handleRemoveAttack = (id) =>
    setAttacks((prev) => prev.filter((a) => a.id !== id));
  const handleCoinChange = (coin, value) =>
    setCoins((prev) => ({ ...prev, [coin]: value }));

  return (
    <MainLayout
      headerTitle="hello Character"
      color="teal"
      css=" flex flex-col lg:grid lg:grid-rows-[auto_auto] lg:grid-cols-[auto_auto_auto] gap-4 lg:p-4 lg:bg-main-100/60 lg:rounded-[10px] lg:*:bg-light-100 *:rounded-[10px]  *:bg-main-100/30 *:p-2   lg:*:border-2 lg:*:border-main-300 lg:*:p-2"
    >
      <div className=" lg:grid lg:grid-cols-2 col-span-3 py-4 lg:py-0">
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

      <section className="grid gap-4 rounded-[10px] ">
        <section className="flex flex-col gap-2 p-2  rounded-[10px] bg-light-100 lg:bg-main-100/30 ">
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
      <section className="grid gap-2">
        <CombatStats
          combat={combat}
          onCombatChange={handleCombatChange}
          deathSaves={deathSaves}
          onDeathSaveToggle={handleDeathSaveToggle}
          dexterityScore={scores.dexterity}
        />
        <AttacksComp
          attacks={attacks}
          onAttackChange={handleAttackChange}
          onAddAttack={handleAddAttack}
          onRemoveAttack={handleRemoveAttack}
          scores={scores}
          proficiencyBonus={proficiencyBonus}
          notes={attackNotes}
          onNotesChange={setAttackNotes}
          ABILITIES={ABILITIES}
        />
        <EquipmentComp
          coins={coins}
          onCoinChange={handleCoinChange}
          list={equipment}
          onListChange={setEquipment}
        />
      </section>
      <section className="grid gap-2">
        <LinedTextarea
          label="personality trait"
          value={personalityTrait}
          setValue={setPersonalityTrait}
        ></LinedTextarea>
        <LinedTextarea
          label="bonds"
          value={bonds}
          setValue={setBonds}
        ></LinedTextarea>
        <LinedTextarea
          label="ideals"
          value={ideals}
          setValue={setIdeals}
        ></LinedTextarea>
        <LinedTextarea
          label="flaws"
          value={flaws}
          setValue={setFlaws}
        ></LinedTextarea>
      </section>
    </MainLayout>
  );
}

export default Character;
