import MainLayout from "../layouts/MainLayout";
import AbilityComp from "../components/character-sheet/AbilityComp";
import CombatStats from "../components/character-sheet/CombatStats";
import CharacterInfo from "../components/character-sheet/CharacterInfo";
import AttacksComp from "../components/character-sheet/AttacksComp";
import EquipmentComp from "../components/character-sheet/EquipmentComp";
import LinedTextarea from "../components/character-sheet/LinedTextarea";

import { ABILITIES, useCharacter } from "../utils/useCharacter";

import { getProficiencyBonus, formatBonus } from "../utils/Cals";

function Character() {
  const {
    character: c,
    setField,
    setIn,
    toggleIn,
    toggleDeathSave,
    addAttack,
    changeAttack,
    removeAttack,
  } = useCharacter();

  const proficiencyBonus = getProficiencyBonus(c.level);

  const handleLevelChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setField("level", value === "" ? "" : Math.min(20, Number(value)));
  };

  return (
    <MainLayout headerTitle=" Character sheet" color="teal" css="grid gap-2">
      <section className=" flex flex-col lg:grid lg:grid-rows-[auto_auto] lg:grid-cols-[1fr_auto] gap-4 lg:p-4 lg:bg-main-100/60 lg:rounded-[10px] lg:*:bg-light-100 *:rounded-[10px]  *:bg-main-100/30 *:p-2   lg:*:border-2 lg:*:border-main-300 lg:*:p-2">
        <div className=" lg:grid lg:grid-cols-2 col-span-3 py-4 lg:py-0">
          {/* character name */}
          <label
            htmlFor="character-name"
            className="group flex w-full flex-col-reverse"
          >
            <span className="mt-1 text-2xl uppercase tracking-[0.25em] text-main-300 transition-colors group-focus-within:text-main-400">
              Character name
            </span>
            <input
              id="character-name"
              name="character_name"
              type="text"
              maxLength={50}
              value={c.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Give your character a name"
              className="w-full border-b-3 border-main-300 bg-transparent px-2 pb-1 text-4xl
            placeholder:text-main-300/40
            transition-colors focus:border-main-400 focus:outline-none"
            />
          </label>

          <CharacterInfo
            info={c.info}
            onInfoChange={(key, value) => setIn("info", key, value)}
            level={c.level}
            onLevelChange={handleLevelChange}
          />
        </div>

        <section className="grid gap-4 rounded-[10px] ">
          <section className="flex flex-col gap-2 p-2 rounded-[10px] bg-light-100 lg:bg-main-100/30 ">
            <div className="grid grid-cols-[auto_1fr] w-fit items-center ">
              <output className="bg-light-100 block text-2xl w-10 h-10 text-center place-content-center border-2 border-main-300 mr-2 rounded-[10px]">
                {formatBonus(proficiencyBonus)}
              </output>
              Proficiency bonus
            </div>

            <label
              htmlFor="inspiration"
              className="grid grid-cols-[auto_1fr] w-fit items-center "
            >
              <input
                className="cursor-pointer appearance-none border-2 border-main-300 bg-light-100
              checked:bg-main-300 checked:shadow-[inset_0_0_0_4px_white]
              focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-main-300
              size-10 rounded-[10px] mr-2"
                id="inspiration"
                name="inspiration"
                type="checkbox"
                checked={c.inspiration}
                onChange={() => setField("inspiration", !c.inspiration)}
              />
              Inspiration
            </label>
          </section>

          {ABILITIES.map(({ name, skills }) => (
            <AbilityComp
              key={name}
              ability={name}
              skills={skills}
              score={c.scores[name]}
              onScoreChange={(ability, value) =>
                setIn("scores", ability, value)
              }
              proficient={c.proficient}
              onToggle={(key) => toggleIn("proficient", key)}
              proficiencyBonus={proficiencyBonus}
            />
          ))}
        </section>

        <section className="grid gap-2">
          <CombatStats
            combat={c.combat}
            onCombatChange={(key, value) => setIn("combat", key, value)}
            deathSaves={c.deathSaves}
            onDeathSaveToggle={toggleDeathSave}
            dexterityScore={c.scores.dexterity}
          />
          <AttacksComp
            attacks={c.attacks}
            onAttackChange={changeAttack}
            onAddAttack={addAttack}
            onRemoveAttack={removeAttack}
            scores={c.scores}
            proficiencyBonus={proficiencyBonus}
            notes={c.attackNotes}
            onNotesChange={(value) => setField("attackNotes", value)}
            ABILITIES={ABILITIES}
          />
          <EquipmentComp
            coins={c.coins}
            onCoinChange={(coin, value) => setIn("coins", coin, value)}
            list={c.equipment}
            onListChange={(value) => setField("equipment", value)}
          />
        </section>

        <artile className="grid gap-2 md:grid-cols-2 md:col-span-2 lg:grid-cols-2 lg:col-span-2">
          <LinedTextarea
            label="personality trait"
            value={c.personality.traits}
            setValue={(v) => setIn("personality", "traits", v)}
          />
          <LinedTextarea
            label="bonds"
            value={c.personality.bonds}
            setValue={(v) => setIn("personality", "bonds", v)}
          />
          <LinedTextarea
            label="ideals"
            value={c.personality.ideals}
            setValue={(v) => setIn("personality", "ideals", v)}
          />
          <LinedTextarea
            label="flaws"
            value={c.personality.flaws}
            setValue={(v) => setIn("personality", "flaws", v)}
          />
        </artile>
      </section>

      {/* appearance section*/}
      <section className="flex flex-col lg:grid lg:grid-rows-[auto_auto] lg:grid-cols-[1fr_auto] gap-4 lg:p-4 lg:bg-main-100/60 lg:rounded-[10px] lg:*:bg-light-100 *:rounded-[10px]  *:bg-main-100/30 *:p-2   lg:*:border-2 lg:*:border-main-300 lg:*:p-2">
        <div className="md:col-span-2 lg:col-span-2">
          <CharacterInfo
            info={c.appearance}
            onInfoChange={(key, value) => setIn("appearance", key, value)}
          />
        </div>

        <article className="grid gap-2 md:grid-cols-2 md:col-span-2 lg:grid-cols-2 lg:col-span-2">
          <div className="grid grid-rows-2 items-stretch gap-2">
            <LinedTextarea
              label="backstory"
              value={c.backstory}
              setValue={(v) => setField("backstory", v)}
            />
            <LinedTextarea
              label="Allies and Organizations"
              value={c.alliesAndOrganizations}
              setValue={(v) => setField("alliesAndOrganizations", v)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <LinedTextarea
              label="appearance notes"
              value={c.appearanceNotes}
              setValue={(v) => setField("appearanceNotes", v)}
            />
            <LinedTextarea
              label="features"
              value={c.features}
              setValue={(v) => setField("features", v)}
            />
            <LinedTextarea
              label="treasure"
              value={c.treasure}
              setValue={(v) => setField("treasure", v)}
            />
          </div>
        </article>
      </section>
    </MainLayout>
  );
}

export default Character;
