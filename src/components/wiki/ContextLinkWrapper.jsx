import { useState } from "react";
import ContextLink from "./ContextLink";
import { CATEGORIES } from "../WikiDummyData";
import AddButton from "../AddButton";

function ContextLinks({ worldSlug, currentSlug }) {
  const [links, setLinks] = useState([]);
  const [open, setOpen] = useState(false);

  function addLink(category, entry) {
    setLinks((prev) =>
      prev.some((link) => link.id === entry.id)
        ? prev
        : [
            ...prev,
            { id: entry.id, categori: category.title, slug: entry.slug },
          ],
    );
    setOpen(false);
  }

  function removeLink(id) {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  }

  return (
    <div className="flex flex-col gap-2">
      <AddButton
        css="col-span-2 lg:min-w-full"
        btnText="add context"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      ></AddButton>

      <div
        className={`sticky md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-2  `}
      >
        {links.map((link) => (
          <ContextLink
            key={link.id}
            categori={link.categori}
            worldSlug={worldSlug}
            contextSlug={link.slug}
            onRemove={() => removeLink(link.id)}
          />
        ))}
      </div>

      {open && (
        <div className="rounded-[10px] border-2 p-2">
          {CATEGORIES.map((category) => (
            <details key={category.id}>
              <summary className="cursor-pointer py-1">
                {category.title}
              </summary>
              <ul className="pl-4">
                {category.entries
                  .filter((entry) => entry.slug !== currentSlug) // cant link to new entry or current entry apge
                  .map((entry) => (
                    <li key={entry.id}>
                      <button
                        type="button"
                        onClick={() => addLink(category, entry)}
                        disabled={links.some((link) => link.id === entry.id)}
                        className="py-1 disabled:opacity-40"
                      >
                        {entry.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContextLinks;
