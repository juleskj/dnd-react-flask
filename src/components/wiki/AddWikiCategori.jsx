import { useState } from "react";
import { CATEGORIES } from "../WikiDummyData";
import AddButton from "../AddButton";
import InputField from "../InputField";
import Button from "../Button";

function AddWikiCategori({ categori, onChange, editing = true }) {
  // UI-only state
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function chooseCategori(category) {
    onChange({ id: category.id, title: category.title, isNew: false });
    setOpen(false);
  }

  function createCategori() {
    const title = newTitle.trim();
    if (!title) return;

    // if it already exists, pick the existing one instead of making a duplicate
    const existing = CATEGORIES.find(
      (c) => c.title.toLowerCase() === title.toLowerCase(),
    );
    if (existing) {
      chooseCategori(existing);
    } else {
      onChange({ id: null, title, isNew: true });
      setOpen(false);
    }
    setNewTitle("");
  }

  function removeCategori() {
    onChange(null); // back to the default
  }

  return (
    <div className="flex flex-col gap-2">
      {editing && (
        <AddButton
          css={`
            ${categori &&
            "text-dark-100 border-gray-700 opacity-40 bg-gray-100  disabled:pointer-events-none"} col-span-2 lg:min-w-full
          `}
          btnText="add category"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          icon={open && !categori ? "xmark" : "add"}
        ></AddButton>
      )}
      {open && !categori && (
        <div className="flex flex-col gap-2 rounded-[10px] border-2 border-main-300 p-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => chooseCategori(category)}
              className="flex items-center justify-between py-1 text-left"
            >
              {category.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5 text-dark-100"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
                />
              </svg>
            </button>
          ))}

          <div className="grid grid-cols-[2fr_1fr] gap-2 border-t-2 border-main-300 pt-2">
            <InputField
              name="new_categori"
              placeholder="Or create a new category..."
              value={newTitle}
              minlength={50}
              onChange={(e) => setNewTitle(e.target.value)}
              color="dark"
            />
            <Button
              buttonType="button"
              buttonText="create"
              onClick={createCategori}
              disabled={!newTitle.trim()}
            >
              Create
            </Button>
          </div>
        </div>
      )}

      {categori && (
        <section className="flex items-center justify-between rounded-[10px] border-2 border-main-300 px-3 py-1">
          <p>{categori.title}</p>
          {editing && (
            <button
              type="button"
              onClick={removeCategori}
              aria-label={`Remove category ${categori.title}`}
              className="px-2 text-xl leading-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5 text-dark-100"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                />
              </svg>
            </button>
          )}
        </section>
      )}
    </div>
  );
}

export default AddWikiCategori;
