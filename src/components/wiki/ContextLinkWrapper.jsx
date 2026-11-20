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
        <div className="rounded-[10px] border-2 border-main-300 p-2">
          {CATEGORIES.map((category) => (
            <details key={category.id} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-1 [&::-webkit-details-marker]:hidden">
                {category.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
                  />
                </svg>
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
