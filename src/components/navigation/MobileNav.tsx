import Footer from "../Footer";

export default function MobileNav({
  isNavOpen,
  handleClick,
}: {
  isNavOpen: any;
  handleClick: any;
}) {
  return (
    <section className="flex lg:hidden  bg-main-300 ">
      {/* burger menu button */}
      <button
        aria-label="Burger menu"
        className="space-y-2 bg-main-200"
        onClick={() => handleClick()}
      >
        <span className="block h-0.5 w-8 bg-main-400 "></span>
        <span className="block h-0.5 w-8 bg-main-400 "></span>
        <span className="block h-0.5 w-8 bg-main-400 "></span>
      </button>

      {/* menu open */}
      <div
        className={
          isNavOpen
            ? "absolute w-full h-full top-0 left-0 bg-main-300 z-10 overflow-scroll overscroll-none"
            : "hidden"
        }
      >
        <section className=" flex justify-between items-start w-full bg-main-300 p-4 ">
          <a className="text-light-100 " href="/" onClick={() => handleClick()}>
            <img
              src="https://placehold.co/600x400"
              alt="Logo godwit systems"
              height="60px"
              width="60px"
            />
          </a>
          {/*close button */}
          <div onClick={() => handleClick()}>
            <svg
              className="h-8 w-8 text-light-100 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </section>

        <ul className=" *w-full *font-medium  *:first-letter:capitalize p-4 w-full *:text-light-100 *:block *:py-4 ">
          <li className="w-full text-left">
            <a href="/campaign" onClick={() => handleClick()}>
              campaign
            </a>
          </li>

          <li className="w-full text-left">
            <a href="/calendar" onClick={() => handleClick()}>
              calendar
            </a>
          </li>
          <li className="w-full text-left">
            <a href="/character" onClick={() => handleClick()}>
              character
            </a>
          </li>
          <li className="w-full text-left">
            <a href="/wiki" onClick={() => handleClick()}>
              wiki
            </a>
          </li>
          {/* button here */}
          <li>logo out</li>
        </ul>
      </div>
    </section>
  );
}
