// components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router";

function fromSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8 ">
      <ol className="flex  flex-wrap items-center justify-start gap-2">
        {parts.map((part, i) => {
          const to = "/" + parts.slice(0, i + 1).join("/");
          const isLast = i === parts.length - 1;

          return (
            <li key={to} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page">{fromSlug(part)}</span>
              ) : (
                <Link className="underline" to={to}>
                  {fromSlug(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
