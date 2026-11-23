import { Link } from "react-router";
import fromSlug from "../../utils/FromSlug";

function ContextLink({ categori, worldSlug, contextSlug, onRemove, editing }) {
  return (
    <article className="relative  hover-scale flex flex-col justify-between  bg-main-100  px-4 py-2 rounded-[10px]  w-full  h-auto ">
      {onRemove && editing && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${fromSlug(contextSlug)}`}
          className="absolute right-3 top-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-5 h-5 ml-8 cursor-pointer"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
            />
          </svg>
        </button>
      )}

      <div>
        <p className="first-letter:capitalize">{categori}</p>
        <Link
          className="flex flex-row items-center gap-4 "
          to={`/wiki/${worldSlug}/${contextSlug}`}
        >
          <h3 className=" first-letter:capitalize inline-block">
            {fromSlug(contextSlug)}
          </h3>
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className=" w-10 h-auto text-dark-100 self-end justify-self-end "
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
        />
      </svg>
    </article>
  );
}

export default ContextLink;
