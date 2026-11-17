import greenBanner from "../assets/green-banner-bg-2.svg";
import campaignCard from "../assets/campaign-card.svg";
import greenArrow from "../assets/green-arrow.svg";
import useWindowDimensions from "./useScreenSize";

export default function CampaignCard({ campaignName, campaignLink }) {
  const { isMobile } = useWindowDimensions();
  return (
    <article
      style={{
        backgroundImage: `url("${isMobile ? greenBanner : campaignCard}")`,
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-between w-full sm:h-40 h-28 items-center px-4 sm:px-5"
    >
      <h2 className="pt-2 text-2xl! sm:text-3xl! text-main-100!">{campaignName}</h2>

      <a href={campaignLink} className="flex gap-2 text-main-100 text-sm!">
        Go to campaign
        <img src={greenArrow} alt="arrow icon" className="w-8" />
      </a>
    </article>
  );
}
