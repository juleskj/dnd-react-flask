import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import { Link } from "react-router";
import fromSlug from "../../utils/FromSlug";
import GoToPageCard from "../../components/GoToPageCard";
import AddButton from "../../components/AddButton";
import SessionsOverview from "../../components/SessionsOverview";

function SingleCampaign() {
  const { slug } = useParams();
  const campaignSlug = slug ?? "";

  return (
    <MainLayout headerTitle={fromSlug(campaignSlug)} color="teal">
      <div className="grid gap-10 mb-10">
        <Link className="underline" to="/campaigns">
          Go back
        </Link>
        <AddButton btnText="Copy link invite" icon="copy" />{" "}
      </div>
      <section className="grid sm:grid-cols-2 gap-8">
        <SessionsOverview />
        <div>
          <GoToPageCard cardTitle="See all active characters" link={"/character"} />
          <GoToPageCard cardTitle="Forgotten Realms" link={"Forgotten Realms"} isAWikiLink additionalText="Go to wiki" />
        </div>
      </section>
    </MainLayout>
  );
}

export default SingleCampaign;
