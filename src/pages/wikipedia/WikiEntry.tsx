import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";

type entry = { id: string; name: string; Entry: string };

function fromEntry(entry: string) {
  return entry
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function WikiEntry() {
  const { entry } = useParams<{ entry: string }>();
  const worldEntry = entry ?? "";

  return (
    <MainLayout
      headerTitle={fromEntry(worldEntry)}
      color="teal"
      css="flex flex-col gap-2 *:max-w-125"
    >
      <p>{fromEntry(worldEntry)}</p>
    </MainLayout>
  );
}

export default WikiEntry;
