import PurpleArrow from "../assets/purple-arrow.svg";
import WhiteArrow from "../assets/white-arrow.svg";

export default function SessionCard({ isUpcoming, sessionNumber, date, sessionLink, sessionNote }) {
  return (
    <article className={`flex flex-col sm:h-130 rounded-xl sm:w-72 px-4 py-5 text-left ${isUpcoming ? "bg-accent-100" : "bg-accent-300"}`}>
      <p className={`text-sm! pb-2 ${isUpcoming ? "text-accent-400" : "text-light-100"}`}>{isUpcoming ? "next session" : "played session"}</p>
      <h2 className={`font-sans! text-4xl! ${isUpcoming ? "text-accent-400!" : "text-accent-100!"}`}>{sessionNumber}</h2>
      <h2 className={`font-sans! text-4xl! ${isUpcoming ? "text-accent-300" : "text-light-100"}`}>session</h2>
      <p className={`text-sm! py-7 ${isUpcoming ? "text-accent-400" : "text-light-100"}`}>{date}</p>
      <p className="bg-light-100 sm:h-64 p-2.5 rounded-xl text-accent-400 text-sm!">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis o eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu ...
      </p>
      <a className="flex justify-end pt-3  mt-auto gap-3">
        <p className={`text-sm! ${isUpcoming ? "text-accent-400" : "text-light-100"}`}>see session</p>
        <img src={isUpcoming ? PurpleArrow : WhiteArrow} alt="arrow icon" className="w-8" />
      </a>
    </article>
  );
}
