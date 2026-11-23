import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import UploadImg from "../../components/UploadImg";

import ContextLinkWrapper from "../../components/wiki/ContextLinkWrapper";

import useScrollDirection from "../../utils/UseScrollDirection";
import EntryDetailList from "../../components/wiki/EntryDetailList";
import { useParams } from "react-router";

import { useState, useEffect } from "react";
import InputField from "../../components/InputField";
import AddWikiCategori from "../../components/wiki/AddWikiCategori";

const ENTRY_DATA = {
  entry_title: "",
  blocks: [{ id: "first", type: "text", content: "" }], // start med én tekstblok
  details: [],
  links: [],
  categori: null,
};

function WikiCreateEntry() {
  const { slug } = useParams();
  const worldSlug = slug ?? "";

  const scrollDirection = useScrollDirection();
  const entryKey = `entry-data-${worldSlug}`;

  // image upload
  const [imageFile, setImageFile] = useState(null);

  const [entry, setEntry] = useState(() => {
    try {
      const saved = localStorage.getItem(entryKey);
      return saved ? { ...ENTRY_DATA, ...JSON.parse(saved) } : ENTRY_DATA;
    } catch {
      return ENTRY_DATA;
    }
  });
  // auto-save the entry
  useEffect(() => {
    localStorage.setItem(entryKey, JSON.stringify(entry));
  }, [entry, entryKey]);

  function updateField(field, value) {
    setEntry((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <MainLayout
      headerTitle="New content"
      color="teal"
      css="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 md:gap-8 "
    >
      <section className="flex flex-col gap-2 items-stretch [&_p]:max-w-[65ch]  relative mb-8 mb:mb-0 lg:mb-0">
        <Breadcrumb></Breadcrumb>
        <AddWikiCategori
          categori={entry.categori}
          onChange={(categori) => updateField("categori", categori)}
        />
        <InputField
          type="text"
          placeholder="give your creatating a title"
          iDhtmlFor="entry-title"
          inputName="entry_title"
          labelText=" Entry title"
          required
          color="dark"
          value={entry.entry_title}
          onChange={(e) => updateField("entry_title", e.target.value)}
        ></InputField>

        <UploadImg
          imgId="1"
          imageFile={imageFile}
          setImageFile={setImageFile}
        ></UploadImg>

        <textarea
          name="entry_text"
          id="entry-text"
          placeholder="Write something..."
          rows={8}
          value={entry.text}
          onChange={(e) => updateField("text", e.target.value)}
          className="w-full resize-none rounded-3xl border-2 border-teal-800 bg-gray-100 px-5 py-3 text-base text-gray-900 placeholder:text-gray-500 transition focus:outline-none focus:ring-4 focus:ring-teal-800/20"
        ></textarea>

        <EntryDetailList
          details={entry.details}
          onChange={(details) => updateField("details", details)}
        ></EntryDetailList>
      </section>

      <section
        className={`sticky [transition:transform_0.3s_ease-in,0.3s_linear]  ${scrollDirection === "down" ? "top-5" : "top-25"}`}
      >
        <ContextLinkWrapper
          worldSlug={worldSlug}
          links={entry.links}
          onChange={(links) => updateField("links", links)}
        />
      </section>
      {/* see the preview of whats getting saved */}
      {/* <pre className="text-xs">
        {JSON.stringify(
          { ...entry, image_url: imageFile?.name ?? null },
          null,
          2,
        )}
      </pre> */}
    </MainLayout>
  );
}

export default WikiCreateEntry;
