import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import WikiCategory from "../../components/wiki/WikiCategory";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import fromSlug from "../../utils/FromSlug";
import toSlug from "../../utils/ToSlug";

function makeEntries(prefix, names) {
  return names.map((name, i) => ({
    id: `${prefix}-${i + 1}`,
    name,
    slug: toSlug(name),
  }));
}

const NPCS = makeEntries("npc", [
  "Sargers",
  "The Jailer",
  "Mira Ashwood",
  "Old Tomas the Ferryman",
]);

const LOCATIONS = makeEntries("loc", [
  "Mists of Pandaria",
  "Legion",
  "Port Brasswater",
  "The Sunken Archive",
]);

const MONSTERS = makeEntries("mon", [
  "Trolls",
  "Ash Wraith",
  "Cave Drake",
  "The Hollow Stag",
]);

const LORE = makeEntries("lore", [
  "Battle of Azeroth",
  "The Shattered Crown",
  "Founding of the Guild",
  "The Long Winter",
]);

function WikiWorld() {
  const { slug } = useParams();
  const worldSlug = slug ?? "";

  return (
    <MainLayout
      headerTitle={fromSlug(worldSlug)}
      color="teal"
      css="flex flex-col gap-2 *:max-w-125"
    >
      <Breadcrumbs></Breadcrumbs>
      <WikiCategory title="NPC" worldSlug={worldSlug} entries={NPCS} />
      <WikiCategory
        title="Locations"
        worldSlug={worldSlug}
        entries={LOCATIONS}
      />
      <WikiCategory title="Monsters" worldSlug={worldSlug} entries={MONSTERS} />
      <WikiCategory title="Lore" worldSlug={worldSlug} entries={LORE} />
    </MainLayout>
  );
}

export default WikiWorld;
