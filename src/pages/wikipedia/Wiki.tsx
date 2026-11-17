import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";

import AddWikiBtn from "../../components/AddWikiBtn";
import WikiWorld from "../../components/WikiWorld";

type World = { id: string; worldTitle: string; slug: string };

function Wiki() {
  const DRAFT_WORLDS: World[] = [
    {
      id: "1",
      worldTitle: "Forgotten Realms",
      slug: toSlug("Forgotten Realms"),
    },
    {
      id: "2",
      worldTitle: "How to train your dragon",
      slug: toSlug("How to train your dragon"),
    },
    {
      id: "3",
      worldTitle: "world of warcraft",
      slug: toSlug("world of warcraft"),
    },
    { id: "4", worldTitle: "Minecraft", slug: toSlug("Minecraft") },
  ];

  const [worlds, setWorlds] = useState<World[]>(DRAFT_WORLDS);

  function toSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  function addWorld(title: string) {
    const newWorld: World = {
      id: crypto.randomUUID(),
      worldTitle: title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    };
    // later save to local storage
    setWorlds((prev) => [...prev, newWorld]);
  }

  return (
    <MainLayout headerTitle="The wikipedia" color="teal">
      <AddWikiBtn btnText="Create new world" onAdd={addWorld} />
      <section
        id="wiki-worlds"
        className="lg:grid lg:grid-rows-auto lg:grid-cols-3 flex flex-col gap-3 py-8"
      >
        {worlds.map((world) => (
          <WikiWorld
            key={world.id}
            id={world.id}
            worldTitle={world.worldTitle}
            slug={world.slug}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default Wiki;
