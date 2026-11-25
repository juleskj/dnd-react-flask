import MainLayout from "../layouts/MainLayout";
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/monarch/theme.css";
import "@fullcalendar/react/themes/monarch/palettes/purple.css";
import ScheduleBackground from "../assets/schedule-bg.svg";
import PlusSign from "../assets/plus-solid-full.svg";
import { Link } from "react-router";

function Calendar() {
  return (
    <MainLayout headerTitle="Calendar" color="teal">
      <section className="grid md:grid-cols-2 gap-20 items-start">
        <div className="mt-10">
          <FullCalendar
            plugins={[themePlugin, dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "event 1", date: "2026-11-01" },
              { title: "event 2", date: "2026-11-22" },
            ]}
          />
          <Link to="/campaigns" className="bg-accent-100 flex w-full sm:w-48 p-2 mt-3 justify-center text-accent-300">
            <p className="font-heading! text-md!">link to campaign</p>
            <img className="w-5" src={PlusSign} alt="plus sign" />
          </Link>
        </div>
        <div className="h-200">
          <h2 className="text-center text-3xl! text-accent-300">Sessions</h2>
          <div className="relative min-h-150">
            <img className="absolute left-1/2 -translate-x-1/2 w-full h-full object-contain p-0" src={ScheduleBackground} alt="Purple background" />
            <div className="relative grid grid-cols-2 text-center text-light-100 pt-20 px-5">
              <div>
                <h3 className="font-heading text-2xl!">Previous</h3>
              </div>
              <div>
                <h3 className="font-heading text-2xl!">Upcoming</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Calendar;
