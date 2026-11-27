import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import WikiWorld from "../../components/wiki/WikiWorld";
import toSlug from "../../utils/ToSlug";
import AddWikiBtn from "../../components/wiki/AddWikiBtn";

function Character() {
  const DRAFT_CHARACTER = [
    {
      id: "1",
      characterName: "alex",
      slug: toSlug("alex"),
    },
    {
      id: "2",
      characterName: "luna",
      slug: toSlug("luna"),
    },
    {
      id: "3",
      characterName: "sheldon cooper",
      slug: toSlug("sheldon cooper"),
    },
    { id: "4", characterName: "cactus", slug: toSlug("cactus") },
  ];

  const [Character, setCharacter] = useState(DRAFT_CHARACTER);

  function addCampaign(title) {
    const newCampaign = {
      id: crypto.randomUUID(),
      characterName: title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    };
    // later save to local storage
    setCharacter((prev) => [...prev, newCampaign]);
  }
  return (
    <MainLayout headerTitle="Character" color="teal">
      <AddWikiBtn btnText="Create new campaign" onAdd={addCampaign} />
      <section className="grid md:grid-cols-2 gap-y-4 gap-x-8 my-8">
        {Character.map((campaign) => (
          <WikiWorld
            key={campaign.id}
            id={campaign.id}
            worldTitle={campaign.characterName}
            to={`/character/${campaign.slug}`}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default Character;
