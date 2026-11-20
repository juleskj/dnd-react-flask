import PurpleArrow from "../assets/purple-arrow.svg";
import WhiteArrow from "../assets/white-arrow.svg";
import { Link } from "react-router";

export default function SessionCard({ isUpcoming, sessionNumber, date, sessionLink, id, slug, sessionNote, variant = "default" }) {
  return (
    <Link key={id} to={`/sessions/${slug}`} className="active:scale-[0.98] hover:scale-[1.02] duration-100 ease-in">
      <article
        className={`flex flex-col ${variant === "default" ? "sm:h-130 sm:w-72 md:w-58 lg:w-72" : "h-28 w-full"} rounded-xl  px-3 sm:px-4 py-5 text-left ${isUpcoming ? "bg-accent-100" : "bg-accent-300"}`}
      >
        <div className={`${variant === "small" && "flex "}`}>
          <div className={`${variant === "small" && "grid grid-cols-[1fr_3fr] gap-2 items-baseline-last"}`}>
            <p className={`text-sm! pb-2 ${variant === "small" && "order-2"} ${isUpcoming ? "text-accent-400" : "text-light-100"}`}>
              {isUpcoming ? "next session" : "played session"}
            </p>
            <h2 className={`font-sans!  ${variant === "small" ? "order-3 text-2xl!" : "text-3xl!"} ${isUpcoming ? "text-accent-400!" : "text-accent-100!"}`}>{sessionNumber}</h2>

            <h2 className={`font-sans! ${variant === "small" ? "order-4 text-2xl!" : "text-3xl"} ${isUpcoming ? "text-accent-300" : "text-light-100"}`}>session</h2>
            <p className={`text-sm! py-4 sm:py-7 ${variant === "small" && "order-1 py-0! sm:py-0!"} ${isUpcoming ? "text-accent-400" : "text-light-100"}`}>{date}</p>
          </div>
          {variant === "default" && <p className="bg-light-100 h-36 sm:h-64 p-2.5 rounded-xl text-accent-400 text-sm!">{sessionNote}</p>}
          <div className={`flex justify-end items-center gap-2 pt-3 ${variant === "default" ? "mt-auto" : "grow"}`}>
            <p className={`text-sm! ${isUpcoming ? "text-accent-400" : "text-light-100"}`}>see session</p>
            <img src={isUpcoming ? PurpleArrow : WhiteArrow} alt="arrow icon" className="w-8" />
          </div>
        </div>
      </article>
    </Link>
  );
}
