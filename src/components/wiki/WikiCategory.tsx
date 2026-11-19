import { Link } from "react-router";
import WikiEntry from "./WikiEntry";

type Entry = { id: string; name: string; slug: string };

function WikiCategory({
  title,
  worldSlug,
  entries,
}: {
  title: string;
  worldSlug: string;
  entries: Entry[];
}) {
  return (
    <article className="border-t-2 border-main-200">
      <h3>{title}</h3>
      <ul className="*:py-1">
        {entries.map((entry) => (
          <WikiEntry
            key={entry.id}
            name={entry.name}
            to={`/wiki/${worldSlug}/${entry.slug}`}
          />
        ))}
      </ul>
    </article>
  );
}

export default WikiCategory;
