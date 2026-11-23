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

const DUMMY_ENTRY = {
  entry_title: "Stormwind",
  categori: null,
  blocks: [
    { id: "b1", type: "text", content: "Lorem ipsum, dolor sit amet..." },
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
      <section className="flex flex-col gap-2 [&_p]:max-w-[65ch]  items-start relative mb-8 mb:mb-0 lg:mb-0">
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
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="max-[600px]:w-screen max-[600px]:max-w-none! max-[600px]:ml-[calc(50%-50vw)]"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          dignissimos non minus ipsa magnam, nesciunt earum dolore aliquam, a
          voluptas dolorum mollitia quis quae natus quia, officia aspernatur
          cumque eveniet?
        </p>

        <EntryDetailList
          editing={isEditing}
          details={data.details}
          onChange={(details) => updateDraft("details", details)}
        />
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="max-[600px]:w-screen max-[600px]:max-w-none! max-[600px]:ml-[calc(50%-50vw)] "
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          dignissimos non minus ipsa magnam, nesciunt earum dolore aliquam, a
          voluptas dolorum mollitia quis quae natus quia, officia aspernatur
          cumque eveniet?
        </p>
      </section>

      <section
        className={`sticky [transition:transform_0.3s_ease-in,0.3s_linear]  ${scrollDirection === "down" ? "top-5" : "top-25"}`}
      >
        <ContextLinkWrapper
          editing={false}
          worldSlug={slug}
          currentSlug={entrySlug}
        ></ContextLinkWrapper>
      </section>
    </MainLayout>
  );
}

export default WikiEntry;
