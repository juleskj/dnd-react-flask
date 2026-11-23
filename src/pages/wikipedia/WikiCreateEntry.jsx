import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";

import ContextLinkWrapper from "../../components/wiki/ContextLinkWrapper";

import useScrollDirection from "../../utils/UseScrollDirection";
import EntryDetailList from "../../components/wiki/EntryDetailList";
import { useParams } from "react-router";

import { useState, useEffect } from "react";
import InputField from "../../components/InputField";
import AddWikiCategori from "../../components/wiki/AddWikiCategori";

import AddWikiBlock from "../../components/wiki/AddWikiBlock";
import Button from "../../components/Button";

const ENTRY_DATA = {
  entry_title: "",
  blocks: [{ id: "first", type: "text", content: "" }], // starts with on textarea
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
  const [imageFiles, setImageFiles] = useState({});

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

  function handleSave() {
    console.log("entry:", entry);
    console.log("images:", imageFiles);
  }

  return (
    <MainLayout
      headerTitle="New content"
      color="teal"
      css="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 md:gap-8 "
    >
      <section className="flex flex-col gap-6 *:bg-main-100/20 *:p-2 *:m-0 *:rounded-[10px] items-stretch [&_p]:max-w-[65ch]  relative mb-8 mb:mb-0 lg:mb-0">
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

        <AddWikiBlock
          blocks={entry.blocks}
          onChange={(blocks) => updateField("blocks", blocks)}
          imageFiles={imageFiles}
          setImageFiles={setImageFiles}
        ></AddWikiBlock>

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
      {/* <pre className="text-xs">{JSON.stringify({ ...entry }, null, 2)}</pre> */}
      <Button
        buttonText="save entry"
        type="button"
        onClick={handleSave}
      ></Button>
    </MainLayout>
  );
}

export default WikiCreateEntry;
