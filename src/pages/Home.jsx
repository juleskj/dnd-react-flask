import { useState, useEffect } from "react";
import scryWizard from "../assets/scry-wizard.svg";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";
import WikiCategory from "../components/wiki/WikiCategory";

function Home() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.user);
      });
  }, []);

  return (
    <MainLayout css="">
      <section className=" -mx-4 lg:-mx-32 ">
        <div className="h-24 bg-main-300 md:h-30" />

        <div className="  flex flex-col items-center gap-3 bg-dark-100 px-4 pb-6 md:flex-row-reverse md:justify-start md:gap-8 md:pb-4">
          <img
            src={scryWizard}
            alt=""
            className="relative -mt-20 size-40 shrink-0 rounded-full bg-light-100 object-cover md:-mt-27 md:size-50"
          />
          <h1 className="text-center text-3xl text-light-100 md:text-4xl">
            welcome adventure
          </h1>
        </div>
      </section>

      <article className="flex flex-col lg:items-center pt-16">
        <h2 className="text-center text-7xl!">Content</h2>
        <span className="bg-main-300 w-0.5 h-20 lg:h-30 rounded-[10px] my-2 mx-auto"></span>
        <ul className="lg:w-[70%] grid gap-4">
          <li className="border-t-2 border-main-300">
            <Link
              className="grid grid-cols-[65%_35%] items-center lg:w-[65%] "
              to="/campaigns"
            >
              <h3>Campaigns</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 ml-8"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </Link>
          </li>
          <li className="border-t-2 border-main-300">
            <Link
              className="grid grid-cols-[65%_35%] lg:w-[65%]"
              to="/character"
            >
              <h3>Character sheets</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 ml-8"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </Link>
          </li>
          <li className="border-t-2 border-main-300">
            <Link
              className="grid grid-cols-[65%_35%] lg:w-[65%]"
              to="/calendar"
            >
              <h3>Calendar</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 ml-8"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </Link>
          </li>
          <li className="border-t-2 border-main-300">
            <Link className="grid grid-cols-[65%_35%] lg:w-[65%]" to="/wiki">
              <h3>Wiki</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 ml-8"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </article>
    </MainLayout>
  );
}

export default Home;
