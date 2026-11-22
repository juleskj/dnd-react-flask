import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import { Link } from "react-router";
import fromSlug from "../../utils/FromSlug";
import SessionCard from "../../components/SessionCard";
import toSlug from "../../utils/ToSlug";
import GoToPageCard from "../../components/GoToPageCard";
import PurpleArrow from "../../assets/purple-arrow.svg";
import AddButton from "../../components/AddButton";

function SingleCampaign() {
  const { slug } = useParams();
  const campaignSlug = slug ?? "";

  const sessions = [
    {
      id: "1",
      sessionNumber: "01",
      date: "12/12",
      slug: toSlug("01 Session"),
    },
    {
      id: "2",
      sessionNumber: "02",
      date: "19/12",
      slug: toSlug("02 Session"),
    },
    {
      id: "3",
      sessionNumber: "03",
      date: "03/01",
      slug: toSlug("03 Session"),
    },
  ];
  return (
    <MainLayout headerTitle={fromSlug(campaignSlug)} color="teal">
      <div className="grid gap-10 mb-10">
        <Link className="underline" to="/campaigns">
          Go back
        </Link>
        <AddButton btnText="Copy link invite" icon="copy" />{" "}
      </div>
      <section className="grid sm:grid-cols-2 gap-8">
        <div className="grid gap-4">
          {sessions.map((session) => (
            <SessionCard key={session.id} sessionNumber={session.sessionNumber} slug={`sessions/${session.slug}`} date={session.date} variant="small" />
          ))}
          <Link className="flex justify-end items-center gap-2 pt-3" to={`/campaigns/${campaignSlug}/sessions`}>
            <p className="text-sm! text-accent-400">see all sessions</p>
            <img src={PurpleArrow} alt="arrow icon" className="w-4" />
          </Link>
        </div>
        <div>
          <GoToPageCard cardTitle="See all active characters" link={"/character"} />
          <GoToPageCard cardTitle="Forgotten Realms" link={"Forgotten Realms"} isAWikiLink additionalText="Go to wiki" />
        </div>
      </section>
    </MainLayout>
  );
}

export default SingleCampaign;
