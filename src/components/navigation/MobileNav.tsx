import Footer from "../Footer";

export default function MobileNav({
  isNavOpen,
  handleClick,
}: {
  isNavOpen: any;
  handleClick: any;
}) {
  return (
    <section className="flex lg:hidden  bg-dark-200 ">
      {/* burger menu button */}
      <button
        aria-label="Burger menu"
        className="space-y-2 bg-dark-100"
        onClick={() => handleClick()}
      >
        <span className="block h-0.5 w-8 bg-light-100 "></span>
        <span className="block h-0.5 w-8 bg-light-100 "></span>
        <span className="block h-0.5 w-8 bg-light-100 "></span>
      </button>

      {/* menu open */}
      <div
        className={
          isNavOpen
            ? "absolute w-full h-full top-0 left-0 bg-dark-200 z-10 overflow-scroll overscroll-none"
            : "hidden"
        }
      >
        <section className=" flex justify-between items-center w-full bg-dark-100 p-4 ">
          <a className="text-light-100 " href="/" onClick={() => handleClick()}>
            <img
              src="https://placehold.co/600x400"
              alt="Logo godwit systems"
              height={100}
              width={100}
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

        <ul className=" border-b-2 border-b-dark-100 p-4 w-full *:text-light-100  *:not-first:border-b-2 *:border-b-light-100 *:block *:py-4 ">
          <li className="w-full">
            <a
              className="uppercase block w-full font-medium"
              href="/contact"
              onClick={() => handleClick()}
            >
              contact
            </a>
          </li>

          <li className="w-full">
            <a
              className="uppercase block w-full font-medium"
              href="/news"
              onClick={() => handleClick()}
            >
              news
            </a>
          </li>
          <li className="w-full">
            <a
              className="uppercase block w-full font-medium"
              href="/company"
              onClick={() => handleClick()}
            >
              company
            </a>
          </li>
        </ul>
        <Footer colorScheme="dark"></Footer>
      </div>
    </section>
  );
}
