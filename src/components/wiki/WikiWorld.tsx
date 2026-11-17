import { Link } from "react-router";

function WikiWorld({
  worldTitle,
  slug,
  id,
}: {
  worldTitle: string;
  slug: string;
  id?: string;
}) {
  return (
    <Link
      key={id}
      to={`/wiki/${slug}`}
      className="active:scale-[0.98] hover:scale-[1.02] duration-100 ease-in"
    >
      <article className="flex flex-row items-center justify-between  py-8 px-4 rounded-[10px] text-light-100 bg-main-400 w-full md:max-w-full lg:max-w-85">
        <h3 className="first-letter:capitalize">{worldTitle}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
          />
        </svg>
      </article>
    </Link>
  );
}

export default WikiWorld;
