import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";
import toSlug from "../../utils/ToSlug";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import AddButton from "../../components/AddButton";
import SessionCard from "../../components/SessionCard";
import NextIcon from "../../assets/next-icon.svg";
import GreyNextIcon from "../../assets/deactive-next-icon.svg";
import PrevIcon from "../../assets/prev-icon.svg";
import GreyPrevIcon from "../../assets/deactive-prev-icon.svg";
import useWindowDimensions from "../../utils/useScreenSize";
import { Link } from "react-router";

function SessionsView() {
  const { isDesktop } = useWindowDimensions();

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
    {
      id: "3",
      sessionNumber: "04",
      date: "10/01",
      slug: toSlug("04 Session"),
    },
    {
      id: "3",
      sessionNumber: "05",
      date: "13/01",
      slug: toSlug("05 Session"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = !isDesktop ? 2 : 4;
  const maxIndex = Math.max(0, sessions.length - visibleCards);

  function prevSlide() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }
  function nextSlide() {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }

  return (
    <MainLayout headerTitle="Sessions" color="teal">
      <Breadcrumb />
      <Link className="flex justify-center" to="new-session">
        <AddButton btnText="plan new session" />
      </Link>
      <div className="justify-end mb-4 hidden sm:flex sm:mt-4 xl:mt-0">
        <div className="flex gap-2">
          <img src={currentIndex === 0 ? GreyPrevIcon : PrevIcon} alt="back arrow" className="cursor-pointer" onClick={prevSlide} />
          <img src={currentIndex === maxIndex ? GreyNextIcon : NextIcon} alt="forward arrow" className="cursor-pointer" onClick={nextSlide} />
        </div>
      </div>
      <div className="overflow-hidden p-3">
        <div
          className="grid sm:grid-flow-col w-full  sm:auto-cols-[calc((100%-3rem)/2)] md:auto-cols-[calc((100%-3rem)/3)] lg:auto-cols-[calc((100%-3rem)/4)] gap-4 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 0.25}rem))`,
          }}
        >
          {sessions.map((session) => (
            <SessionCard date={session.date} sessionNumber={session.sessionNumber} slug={session.slug} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default SessionsView;
