export default function DesktopNav({
  open,
  isOpen,
  scheduleClose,
}: {
  open: any;
  scheduleClose: any;
  isOpen: any;
}) {
  return (
    <div className="flex flex-row items-center gap-8">
      <ul className="*:first-letter:capitalize *:text-light-100  hidden lg:flex justify-end gap-8">
        <li>
          <a
            className="font-medium hover:text-accent-100 hover:underline-offset-8 hover:underline hover:decoration-current"
            href="/contact"
          >
            contact
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-accent-100 hover:underline-offset-8 hover:underline hover:decoration-current"
            href="/company"
          ></a>
        </li>
      </ul>
    </div>
  );
}
