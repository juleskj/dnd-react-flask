import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import CampaignCard from "../../components/CampaignCard";
import toSlug from "../../utils/ToSlug";
import AddWikiBtn from "../../components/wiki/AddWikiBtn";

function Campaigns() {
  const DRAFT_CAMPAIGNS = [
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

  const [campaigns, setCampaigns] = useState(DRAFT_CAMPAIGNS);

  function addCampaign(title) {
    const newCampaign = {
      id: crypto.randomUUID(),
      campaignName: title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    };
    // later save to local storage
    setCampaigns((prev) => [...prev, newCampaign]);
  }
  return (
    <MainLayout headerTitle="Campaigns" color="teal">
      <AddWikiBtn btnText="Create new campaign" onAdd={addCampaign} />
      <section className="grid md:grid-cols-2 gap-y-4 gap-x-8 my-8">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} id={campaign.id} campaignName={campaign.worldTitle} slug={campaign.slug} />
        ))}
      </section>
    </MainLayout>
  );
}

export default Campaigns;
