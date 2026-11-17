"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { useLocation, Link } from "react-router";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(false);

  const location = useLocation();

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("");
    const [prevOffset, setPrevOffset] = useState(0);

    const toggleScrollDirection = () => {
      let scrollY = window.scrollY;
      if (scrollY > prevOffset && scrollY > 50) {
        setScrollDirection("down");
      } else if (scrollY < prevOffset && scrollY > 50) {
        setScrollDirection("up");
      } else {
        setScrollDirection("");
      }
      setPrevOffset(scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", toggleScrollDirection);
      return () => {
        window.removeEventListener("scroll", toggleScrollDirection);
      };
    });

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  return (
    <header
      className={` scroll-${scrollDirection}  ${isHome ? " bg-main-200 lg:bg-transparent" : "  bg-main-200"} lg:sticky  flex items-center justify-between px-4 lg:px-16 py-4   lg:w-full   lg:top-0  lg:left-0  lg:z-10   `}
    >
      <Link className="text-light-100 hover-scale " to="/">
        <img
          src="https://placehold.co/600x400"
          alt="Logo godwit systems"
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
