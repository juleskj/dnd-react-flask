import { Link } from "react-router";
import WhiteArrow from "../assets/white-arrow.svg";
import BlackArrow from "../assets/arrow.svg";

export default function GoToPageCard({ link, cardTitle, additionalText, isAWikiLink, color }) {
  return (
    <Link to={isAWikiLink ? `/wiki/${link}` : link} className="block active:scale-[0.98] hover:scale-[1.02] duration-100 ease-in">
      <article className={`flex flex-col justify-center h-28 w-full rounded-xl px-3 sm:px-4 py-5 text-left ${color !== "teal" ? "bg-black" : "bg-[#86BDBB]"} mb-4`}>
        <div className="flex">
          <div>
            {additionalText && <p className={`text-sm! pb-2 ${color !== "teal" ? "text-light-100" : "text-black"}`}>{additionalText}</p>}
            <h2 className={`font-sans! text-2xl! ${color !== "teal" ? "text-light-100" : "text-black"}`}>{cardTitle}</h2>
          </div>
          <div className="flex justify-end items-center gap-2 grow">
            <img src={color !== "teal" ? WhiteArrow : BlackArrow} alt="arrow icon" className="w-8" />
          </div>
        </div>
      </article>
    </Link>
  );
}
