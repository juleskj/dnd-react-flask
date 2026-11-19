import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import AddWikiBtn from "../../components/wiki/AddWikiBtn";
import WikiWorld from "../../components/wiki/WikiWorld";
import toSlug from "../../utils/ToSlug";

function Wiki() {
  const DRAFT_WORLDS = [
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

  const [worlds, setWorlds] = useState(DRAFT_WORLDS);

  function addWorld(title) {
    const newWorld = {
      id: crypto.randomUUID(),
      worldTitle: title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    };
    // later save to local storage
    setWorlds((prev) => [...prev, newWorld]);
  }

  return (
    <MainLayout headerTitle="The wikipedia" color="teal">
      <Breadcrumbs></Breadcrumbs>
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
