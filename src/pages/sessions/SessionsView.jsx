import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router";
import { useState } from "react";
import toSlug from "../../utils/ToSlug";
import Breadcrumb from "../../components/navigation/BreadCrumb";
import AddButton from "../../components/AddButton";
import SessionCard from "../../components/SessionCard";
import NextIcon from "../../assets/next-icon.svg";
import PrevIcon from "../../assets/prev-icon.svg";

function SessionsView() {
  const { slug } = useParams();

  const sessionSlug = slug ?? "";
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
    {
      id: "3",
      sessionNumber: "04",
      date: "10/01",
      slug: toSlug("Session 04"),
    },
    {
      id: "3",
      sessionNumber: "05",
      date: "13/01",
      slug: toSlug("Session 05"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;
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
      <div className="flex justify-center">
        <AddButton btnText="plan new session" />
      </div>
      <div className="flex justify-end mb-4">
        <div className="flex gap-2">
          <img src={PrevIcon} alt="back arrow" className="cursor-pointer" onClick={prevSlide} />
          <img src={NextIcon} alt="forward arrow" className="cursor-pointer" onClick={nextSlide} />
        </div>
      </div>
      <div className="overflow-hidden p-3">
        <div
          className="grid grid-flow-col w-full  auto-cols-[calc((100%-3rem)/4)] gap-4 transition-transform duration-300 ease-in-out"
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
