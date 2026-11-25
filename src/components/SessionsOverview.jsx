import toSlug from "../utils/ToSlug";
import SessionCard from "./SessionCard";
import { Link } from "react-router";
import PurpleArrow from "../assets/purple-arrow.svg";
import { useParams } from "react-router";

export default function SessionsOverview({ isResponsive }) {
  const { slug, campaignSlug } = useParams();
  const currentCampaignSlug = campaignSlug ?? slug;

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
    <div className={`grid gap-4 grid-cols-1 ${isResponsive && "md:grid-cols-2 lg:grid-cols-3"}`}>
      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          sessionNumber={session.sessionNumber}
          slug={`/campaigns/${currentCampaignSlug}/sessions/${session.slug}`}
          date={session.date}
          variant="small"
        />
      ))}
      <Link className={`flex justify-end items-center gap-2 pt-3 ${isResponsive && "md:col-span-2 lg:col-span-3"}`} to={`/campaigns/${currentCampaignSlug}/sessions`}>
        <p className="text-sm! text-accent-400">see all sessions</p>
        <img src={PurpleArrow} alt="arrow icon" className="w-4" />
      </Link>
    </div>
  );
}
