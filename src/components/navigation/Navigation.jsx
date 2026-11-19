"use client";

import { useState, useEffect } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useScrollDirection from "../../utils/UseScrollDirection";
import { useLocation, Link } from "react-router";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const location = useLocation();

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const scrollDirection = useScrollDirection();

  return (
    <header
      className={` scroll-${scrollDirection}  ${isHome ? " bg-main-200 lg:bg-transparent" : "  bg-main-200"} lg:sticky  flex items-center justify-between px-4 lg:px-16 py-4   lg:w-full   lg:top-0  lg:left-0  lg:z-10   `}
    >
      <Link className="text-light-100 hover-scale " to="/">
        <img
          src="https://placehold.co/600x400"
          alt="placeholder"
          height="60"
          width="60"
          className="tv:h-[50] tv:w-auto"
        />
      </Link>

      <nav className="">
        {/* mobile navigation */}
        <MobileNav isNavOpen={isNavOpen} handleClick={handleClick}></MobileNav>

        {/* desktop navigation */}
        <DesktopNav scrollDirection={scrollDirection}></DesktopNav>
      </nav>
    </header>
  );
}
