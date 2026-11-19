import greenBanner from "../assets/green-banner-bg-2.svg";
import campaignCard from "../assets/campaign-card.svg";
import greenArrow from "../assets/green-arrow.svg";
import useWindowDimensions from "./useScreenSize";
import { Link } from "react-router";

export default function CampaignCard({ campaignName, id, slug }) {
  const { isMobile } = useWindowDimensions();
  return (
    <Link key={id} to={`/campaigns/${slug}`} className="active:scale-[0.98] hover:scale-[1.02] duration-100 ease-in">
      <article
        style={{
          backgroundImage: `url("${isMobile ? greenBanner : campaignCard}")`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justify-between w-full lg:h-40 h-28 items-center px-4 sm:px-5"
      >
        <h2 className="pt-2 text-xl! lg:text-3xl! text-main-100!">{campaignName}</h2>

        <div className="flex gap-2 text-main-100 text-sm!">
          <p>Go to campaign</p>
          <img src={greenArrow} alt="arrow icon" className="w-8" />
        </div>
      </article>
    </Link>
  );
}
