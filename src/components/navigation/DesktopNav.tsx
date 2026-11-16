export default function DesktopNav({
  scrollDirection,
}: {
  scrollDirection: any;
}) {
  return (
    <div className="flex flex-row items-center gap-8">
      <ul
        className={` scroll-${scrollDirection}   *:first-letter:capitalize hidden lg:flex justify-end gap-8`}
      >
        <li>
          <a
            className="font-medium hover:text-main-200 hover:underline-offset-8 hover:underline hover:decoration-current"
            href="/campaign"
          >
            campaign
          </a>
        </li>

        <li>
          <a
            className="font-medium hover:text-main-200 hover:underline-offset-8 hover:underline hover:decoration-current"
            href="/calendar"
          >
            calendar
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-main-200 hover:underline-offset-8 hover:underline hover:decoration-current"
            href="/character"
          >
            character
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-main-200 hover:underline-offset-8 hover:underline hover:decoration-current"
            href="/wiki"
          >
            wiki
          </a>
        </li>
        <li>logo out</li>
      </ul>
    </div>
  );
}
