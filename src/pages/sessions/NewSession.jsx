import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import SessionsOverview from "../../components/SessionsOverview";
import { Link } from "react-router";
import { useParams } from "react-router";
function NewSession() {
  const { campaignSlug } = useParams();

  return (
    <MainLayout headerTitle="New session" color="teal">
      <Breadcrumb />
      <form className="md:flex justify-between items-end">
        <div className="grid gap-6 border-solid border-2 rounded-lg p-6 md:w-2/3 lg:w-1/2">
          <label htmlFor="date">Pick a date</label>
          <input type="datetime-local" name="date" id="date" />
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="border-2 border-main-100" />
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="8" className="border-2 border-main-100"></textarea>
          <label htmlFor="private-notes">DM notes (private): </label>
          <textarea id="private-notes" name="private-notes" rows="5" className="border-2 border-main-100"></textarea>
        </div>
        <div className="flex gap-4 mt-5 justify-center">
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
