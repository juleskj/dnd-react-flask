import { Link } from "react-router";
import WhiteArrow from "../assets/white-arrow.svg";

export default function GoToPageCard({ link, cardTitle, additionalText, isAWikiLink }) {
  return (
    <Link to={isAWikiLink ? `/wiki/${link}` : link} className="active:scale-[0.98] hover:scale-[1.02] duration-100 ease-in">
      <article className="flex flex-col justify-center h-28 w-full rounded-xl px-3 sm:px-4 py-5 text-left bg-black mb-4">
        <div className="flex">
          <div>
            {additionalText && <p className="text-sm! pb-2 text-light-100">{additionalText}</p>}
            <h2 className="font-sans! text-3xl! text-light-100">{cardTitle}</h2>
          </div>
          <div className="flex justify-end items-center gap-2 pt-3 grow">
            <p className="text-sm! ">see session</p>
            <img src={WhiteArrow} alt="arrow icon" className="w-8" />
          </div>
        </div>
      </article>
    </Link>
  );
}
