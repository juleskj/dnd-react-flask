import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import { useParams, Link } from "react-router";
import EditButton from "../../components/EditButton";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import fromSlug from "../../utils/FromSlug";
import EntryDetailList from "../../components/wiki/EntryDetailList";
import useScrollDirection from "../../utils/UseScrollDirection";
import ContextLinkWrapper from "../../components/wiki/ContextLinkWrapper";

import AddWikiBlock from "../../components/wiki/AddWikiBlock";

import defaultImg from "../../assets/Cover.jpg";

const DUMMY_ENTRY = {
  entry_title: "Stormwind",
  categori: null,
  blocks: [
    { id: "b1", type: "image", fileName: null, imageUrl: defaultImg },
    {
      id: "b1",
      type: "text",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dignissimos non minus ipsa magnam, nesciunt earum dolore aliquam, a voluptas dolorum mollitia quis quae natus quia, officia aspernatur cumque eveniet?",
    },
  ],
  details: [],
  links: [],
};

function WikiEntry() {
  const { entry: entrySlug, slug } = useParams();

  const scrollDirection = useScrollDirection();

  const [isEditing, setIsEditing] = useState(false);
  const [entry, setEntry] = useState(DUMMY_ENTRY);
  const [draft, setDraft] = useState(null);

  const [imageFiles, setImageFiles] = useState({});

  useEffect(() => {
    setEntry(DUMMY_ENTRY);
  }, [entrySlug]);

  function startEdit() {
    setDraft(entry);
    setImageFiles({});
    setIsEditing(true);
  }

  function cancelEdit() {
    setDraft(null);
    setImageFiles({});
    setIsEditing(false);
  }

  async function saveEdit() {
    console.log("update", draft, imageFiles);
    setEntry(draft);
    setIsEditing(false);
  }

  function updateDraft(field, value) {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }

  if (!entry) return <p>Loading...</p>;
  const data = isEditing ? draft : entry;
  return (
    <MainLayout
      headerTitle={fromSlug(entrySlug)}
      color="teal"
      css="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 md:gap-8 "
    >
      <section className="flex flex-col items-stretch gap-5 [&_p]:max-w-[65ch]  relative mb-8 mb:mb-0 lg:mb-0">
        <Breadcrumb></Breadcrumb>
        {isEditing ? (
          <div className="grid grid-cols-2  gap-2">
            <Button
              buttonText="save changes"
              buttonType="button"
              onClick={saveEdit}
              center={false}
            />
            <Button
              buttonText="cancel"
              center={false}
              buttonType="button"
              onClick={cancelEdit}
            />
          </div>
        ) : (
          <EditButton onEdit={startEdit} />
        )}
        <AddWikiBlock
          editing={isEditing}
          blocks={data.blocks}
          onChange={(blocks) => updateDraft("blocks", blocks)}
          imageFiles={imageFiles}
          setImageFiles={setImageFiles}
        />

        <EntryDetailList
          editing={isEditing}
          details={data.details}
          onChange={(details) => updateDraft("details", details)}
        />
      </section>

      <section
        className={`sticky [transition:transform_0.3s_ease-in,0.3s_linear]  ${scrollDirection === "down" ? "top-5" : "top-25"}`}
      >
        <ContextLinkWrapper
          editing={isEditing}
          worldSlug={slug}
          currentSlug={entrySlug}
          links={data.links}
          onChange={(links) => updateDraft("links", links)}
        ></ContextLinkWrapper>
      </section>
    </MainLayout>
  );
}

export default WikiEntry;
