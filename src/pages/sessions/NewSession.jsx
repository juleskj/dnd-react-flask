import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import SessionsOverview from "../../components/SessionsOverview";
import { Link } from "react-router";
import { useParams } from "react-router";
import InputField from "../../components/InputField";
import { useState } from "react";

function NewSession() {
  const ENTRY_DATA = {
    date: "",
    session_title: "",
    description: "",
    dm_notes: "",
  };

  const { campaignSlug } = useParams();
  const entryKey = `entry-data-session`;
  const MAX_TEXT = 10000;
  const [entry, setEntry] = useState(() => {
    try {
      const saved = localStorage.getItem(entryKey);
      return saved ? { ...ENTRY_DATA, ...JSON.parse(saved) } : ENTRY_DATA;
    } catch {
      return ENTRY_DATA;
    }
  });

  function updateField(field, value) {
    setEntry((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <MainLayout headerTitle="New session" color="purple">
      <form>
        <div className="flex flex-col gap-6 max-w-1/2 *:bg-main-100/20 *:p-2 *:m-0 *:rounded-[10px] items-stretch [&_p]:max-w-[65ch]  relative mb-8 mb:mb-0 lg:mb-0">
          <Breadcrumb />

          <InputField
            type="datetime-local"
            iDhtmlFor="date"
            inputName="date"
            labelText="Pick a date"
            required
            color="dark"
            value={entry.session_title}
            onChange={(e) => updateField("session_title", e.target.value)}
          ></InputField>
          <InputField
            type="text"
            placeholder="create a title"
            iDhtmlFor="session-title"
            inputName="session_title"
            labelText="Session title"
            required
            color="dark"
            value={entry.session_title}
            onChange={(e) => updateField("session_title", e.target.value)}
          ></InputField>
          <div className="grid gap-y-2">
            <label htmlFor="description" className="text-xl!">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write something..."
              maxLength={MAX_TEXT}
              rows={10}
              value={entry.description}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full font-sans resize-none rounded-[10px] border-2 border-teal-800 bg-gray-100 px-5 py-3 text-base text-gray-900 placeholder:text-gray-500 transition focus:outline-none focus:ring-4 focus:ring-teal-800/20"
            ></textarea>
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="description" className="text-xl!">
              DM notes (private)
            </label>
            <textarea
              name="dm_notes"
              placeholder="Write something..."
              maxLength={MAX_TEXT}
              rows={7}
              value={entry.dm_notes}
              onChange={(e) => updateField("dm_notes", e.target.value)}
              className="w-full font-sans resize-none rounded-[10px] border-2 border-teal-800 bg-gray-100 px-5 py-3 text-base text-gray-900 placeholder:text-gray-500 transition focus:outline-none focus:ring-4 focus:ring-teal-800/20"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-4 mt-5 justify-end">
          <Link
            to={`/campaigns/${campaignSlug}/sessions`}
            className="py-3 w-28 border-accent-300 border cursor-pointer text-accent-300 text-center rounded-md text-2xl! font-sans!"
          >
            cancel
          </Link>
          <button className="py-3 w-28 bg-accent-100 rounded-md cursor-pointer text-accent-300 text-2xl! font-sans!" type="submit">
            save
          </button>
        </div>
      </form>
      <section className="my-12">
        <h3 className="font-heading text-3xl! mb-2">Previous sessions</h3>
        <SessionsOverview isResponsive />
      </section>
    </MainLayout>
  );
}

export default NewSession;
