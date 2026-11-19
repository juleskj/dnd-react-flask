import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import fromSlug from "../../utils/FromSlug";
import SessionCard from "../../components/SessionCard";
import toSlug from "../../utils/ToSlug";

function SingleCampaign() {
  const { slug } = useParams();
  const campaignSlug = slug ?? "";

  const sessions = [
    {
      id: "1",
      sessionNumber: "01",
      date: "12/12",
      slug: toSlug("Session 01"),
    },
    {
      id: "2",
      sessionNumber: "02",
      date: "19/12",
      slug: toSlug("Session 02"),
    },
    {
      id: "3",
      sessionNumber: "03",
      date: "03/01",
      slug: toSlug("Session 03"),
    },
  ];
  return (
    <MainLayout headerTitle={fromSlug(campaignSlug)} color="teal">
      <section className="grid sm:grid-cols-2">
        <div className="grid gap-4">
          {sessions.map((session) => (
            <SessionCard key={session.id} sessionNumber={session.sessionNumber} slug={session.slug} date={session.date} variant="small" />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default SingleCampaign;
