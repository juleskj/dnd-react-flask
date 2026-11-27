import { useEffect, useRef, useState } from "react";

export const ABILITIES = [
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

const makeId = () =>
  crypto.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const newAttack = () => ({
  id: makeId(),
  name: "",
  ability: "strength",
  proficient: true,
  damage: "",
});

export const newCantrip = () => ({
  id: makeId(),
  name: "",
});

export const newSpell = (level = 1) => ({
  id: makeId(),
  name: "",
  level, //  1-9
  prepared: false,
  notes: "",
});

const GROUPS = [
  "info",
  "appearance",
  "scores",
  "combat",
  "coins",
  "personality",
  "deathSaves",
  "spellcasting",
];

function loadCharacter(slug) {
  const defaults = createCharacter();
  if (slug) defaults.name = slug.replaceAll("-", " "); // ← new line
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return defaults;

    const merged = { ...defaults, ...saved };
    for (const group of GROUPS) {
      merged[group] = { ...defaults[group], ...saved[group] };
    }
    return merged;
  } catch {
    return defaults;
  }
}

function saveCharacter(character) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
  } catch {
    /* storage full or blocked: ignore */
  }
}

export const createCharacter = () => ({
  name: "",
  level: 1,
  inspiration: false,
  info: {
    class: "",
    background: "",
    playerName: "",
    race: "",
    alignment: "",
    xp: "",
  },
  backstory: "",
  alliesAndOrganizations: "",
  features: "",
  appearanceNotes: "",
  treasure: "",
  appearance: { age: "", height: "", weight: "", eyes: "", skin: "", hair: "" },
  scores: Object.fromEntries(ABILITIES.map(({ name }) => [name, "10"])),
  proficient: {}, // e.g. { "strength-athletics": true }
  combat: {
    ac: "",
    speed: "",
    hpMax: "",
    hpCurrent: "",
    hpTemp: "",
    hitDice: "",
  },
  deathSaves: {
    successes: [false, false, false],
    failures: [false, false, false],
  },
  attacks: [newAttack(), newAttack(), newAttack()],
  attackNotes: "",
  coins: { cp: "", sp: "", ep: "", gp: "", pp: "" },
  equipment: "",
  personality: { traits: "", ideals: "", bonds: "", flaws: "" },
  cantrips: [newCantrip(), newCantrip(), newCantrip()],

  spellcasting: {
    ability: "intelligence",
    spells: [newSpell(), newSpell()],
  },
});

const STORAGE_KEY = "dnd-character";

export function useCharacter(slug) {
  const [character, setCharacter] = useState(() => loadCharacter(slug));
  // autosave on every change
  const latest = useRef(character);
  latest.current = character;

  // debounced autosave: waits until the user pauses for 1s
  useEffect(() => {
    const timer = setTimeout(() => saveCharacter(character), 1000);
    return () => clearTimeout(timer);
  }, [character]);

  // save immediately if the tab is closed or hidden before the timer fires
  useEffect(() => {
    const flush = () => saveCharacter(latest.current);
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
    };

    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const setField = (field, value) =>
    setCharacter((prev) => ({ ...prev, [field]: value }));

  const setIn = (group, key, value) =>
    setCharacter((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: value },
    }));

  const toggleIn = (group, key) =>
    setCharacter((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] },
    }));

  const toggleDeathSave = (type, index) =>
    setCharacter((prev) => ({
      ...prev,
      deathSaves: {
        ...prev.deathSaves,
        [type]: prev.deathSaves[type].map((v, i) => (i === index ? !v : v)),
      },
    }));

  const addAttack = () =>
    setCharacter((prev) => ({
      ...prev,
      attacks: [...prev.attacks, newAttack()],
    }));

  const addCantrip = () =>
    setCharacter((prev) => ({
      ...prev,
      cantrips: [...prev.cantrips, newCantrip()],
    }));

  const changeAttack = (id, field, value) =>
    setCharacter((prev) => ({
      ...prev,
      attacks: prev.attacks.map((a) =>
        a.id === id ? { ...a, [field]: value } : a,
      ),
    }));

  const changeCantrip = (id, field, value) =>
    setCharacter((prev) => ({
      ...prev,
      cantrips: prev.cantrips.map((c) =>
        c.id === id ? { ...c, [field]: value } : c,
      ),
    }));

  const removeAttack = (id) =>
    setCharacter((prev) => ({
      ...prev,
      attacks: prev.attacks.filter((a) => a.id !== id),
    }));

  const removeCantrip = (id) =>
    setCharacter((prev) => ({
      ...prev,
      cantrips: prev.cantrips.filter((c) => c.id !== id),
    }));

  const addSpell = (level = 0) =>
    setCharacter((prev) => ({
      ...prev,
      spellcasting: {
        ...prev.spellcasting,
        spells: [...prev.spellcasting.spells, newSpell(level)],
      },
    }));

  const changeSpell = (id, field, value) =>
    setCharacter((prev) => ({
      ...prev,
      spellcasting: {
        ...prev.spellcasting,
        spells: prev.spellcasting.spells.map((s) =>
          s.id === id ? { ...s, [field]: value } : s,
        ),
      },
    }));

  const removeSpell = (id) =>
    setCharacter((prev) => ({
      ...prev,
      spellcasting: {
        ...prev.spellcasting,
        spells: prev.spellcasting.spells.filter((s) => s.id !== id),
      },
    }));

  return {
    character,
    setField,
    setIn,
    toggleIn,
    toggleDeathSave,
    addAttack,
    addCantrip,
    changeAttack,
    removeAttack,
    changeCantrip,
    removeCantrip,
    addSpell,
    changeSpell,
    removeSpell,
  };
}
