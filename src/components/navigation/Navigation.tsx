"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { useLocation } from "react-router";

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

  // delay before closing product nav
  let delay = 150;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<any>(null);

  const open = useCallback(() => {
    clearTimeout(timeoutRef.current);

    setIsOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => setIsOpen(false), delay);
  }, [delay]);

  return (
    <header
      className={` scroll-${scrollDirection} ${isOpen ? "bg-dark-100! " : ""}   ${isHome ? "lg:fixed bg-dark-100 lg:bg-transparent" : " lg:sticky bg-dark-100  "}   flex items-center justify-between px-4 lg:px-16 py-4   lg:w-full   lg:top-0  lg:left-0  lg:z-10   `}
    >
      <a className="text-light-100 hover-scale " href="/">
        <img
          src="https://placehold.co/600x400"
          alt="Logo godwit systems"
          height="150"
          width="150"
          className="  tv:h-[50] tv:w-auto"
        />
      </a>

      <nav className="">
        {/* mobile navigation */}
        <MobileNav isNavOpen={isNavOpen} handleClick={handleClick}></MobileNav>

        {/* desktop navigation */}
        <DesktopNav
          open={open}
          isOpen={isOpen}
          scheduleClose={scheduleClose}
        ></DesktopNav>
      </nav>
    </header>
  );
}
