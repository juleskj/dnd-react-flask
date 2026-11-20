import greenBanner from "../assets/green-banner-bg-2.svg";
import greenArrow from "../assets/green-arrow.svg";
import { Link } from "react-router";

export default function CampaignCard({ campaignName, id, slug }) {
  return (
    <Link key={id} to={`/campaigns/${slug}`} className="active:scale-[0.98] hover:scale-[1.02] duration-100 ease-in">
      <article
        style={{
          backgroundImage: `url("${greenBanner}")`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justify-between w-full h-32 items-center px-4 sm:px-5"
      >
        <h2 className="pt-2 text-xl! lg:text-2xl! text-main-100!">{campaignName}</h2>

        <div className="flex gap-2 text-main-100 text-sm!">
          <p>Go to campaign</p>
          <img src={greenArrow} alt="arrow icon" className="w-8" />
        </div>
      </article>
    </Link>
  );
}
