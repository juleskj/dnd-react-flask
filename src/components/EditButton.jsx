import { useState, useRef, useEffect } from "react";

function EditButton({ onEdit }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="" ref={menuRef}>
      <button
        type="button"
        className="grid place-items-center cursor-pointer align-left"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 h-5 text-dark-100"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className=" text-right mr-2 z-50  w-40 rounded-lg border-2 bg-light-100 p-3 shadow-lg">
          <div className="flex justify-items-start ">
            <button
              className=" cursor-pointer"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 text-dark-100"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-2 ">
            <li>
              <button
                className=" cursor-pointer underline"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onEdit?.();
                }}
              >
                Edit
              </button>
            </li>

            <li>
              <button
                className=" cursor-pointer underline"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  // Share functionality here
                }}
              >
                Share
              </button>
            </li>

            <li>
              <button
                className=" cursor-pointer underline"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  // Delete functionality here
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditButton;
