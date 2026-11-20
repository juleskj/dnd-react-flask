function toSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function makeEntries(prefix, names) {
  return names.map((name, i) => ({
    id: `${prefix}-${i + 1}`,
    name,
    slug: toSlug(name),
  }));
}

export const CATEGORIES = [
  {
    id: "npc",
    title: "NPC",
    entries: makeEntries("npc", [
      "Sargers",
      "The Jailer",
      "Mira Ashwood",
      "Old Tomas the Ferryman",
    ]),
  },
  {
    id: "loc",
    title: "Locations",
    entries: makeEntries("loc", [
      "Mists of Pandaria",
      "Legion",
      "Port Brasswater",
      "The Sunken Archive",
    ]),
  },
  {
    id: "mon",
    title: "Monsters",
    entries: makeEntries("mon", [
      "Trolls",
      "Ash Wraith",
      "Cave Drake",
      "The Hollow Stag",
    ]),
  },
  {
    id: "lore",
    title: "Lore",
    entries: makeEntries("lore", [
      "Battle of Azeroth",
      "The Shattered Crown",
      "Founding of the Guild",
      "The Long Winter",
    ]),
  },
];
