import { Link } from "react-router";

export default function DesktopNav({
  scrollDirection,
}) {
  return (
    <div className="flex flex-row items-center gap-8">
      <ul
        className={` scroll-${scrollDirection}    *:first-letter:capitalize hidden lg:flex justify-end gap-8`}
      >
        <li>
          <Link
            className="font-medium hover:text-main-300 hover:underline-offset-8 hover:underline hover:decoration-current"
            to="/campaign"
          >
            campaign
          </Link>
        </li>

        <li>
          <Link
            className="font-medium hover:text-main-300 hover:underline-offset-8 hover:underline hover:decoration-current"
            to="/calendar"
          >
            calendar
          </Link>
        </li>
        <li>
          <Link
            className="font-medium hover:text-main-300 hover:underline-offset-8 hover:underline hover:decoration-current"
            to="/character"
          >
            character
          </Link>
        </li>
        <li>
          <Link
            className="font-medium hover:text-main-300 hover:underline-offset-8 hover:underline hover:decoration-current"
            to="/wiki"
          >
            wiki
          </Link>
        </li>
        <li>logout</li>
      </ul>
    </div>
  );
}
