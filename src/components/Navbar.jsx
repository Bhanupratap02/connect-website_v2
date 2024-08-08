/** @format */

import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [active, setActive] = useState(""); // use state
  const [toggle, setToggle] = useState(false); // use state

  useEffect(() => {
    // Set the initial background color to #FFFFFF
    // gsap.set(".navbar", { backgroundColor: "#FFFFFF" });

    // Change the background color to #ffd102 when 30% of the about-us-section is visible
    ScrollTrigger.create({
      trigger: ".after-section",
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () =>
        gsap.to(".navbar", { backgroundColor: "#ffd102", duration: 0.5 }),
      onLeaveBack: () =>
        gsap.to(".navbar", { backgroundColor: "#FFFFFF", duration: 0.5 }),
    });
 ScrollTrigger.create({
   trigger: ".footer2",
   start: "bottom top",
   end: "bottom top",
   onEnter: () =>
     gsap.to(".navbar", { backgroundColor: "#f0f0f0", duration: 0.5 }),
   onLeaveBack: () =>
     gsap.to(".navbar", { backgroundColor: "#ffd102", duration: 0.5 }),
 });
  }, []);

  const handleLinkClick = (title) => {
    setActive(title);
    setToggle(false); // Close the menu on link click
    window.scrollTo(0, 0); // Scroll to top when a link is clicked
  };

  return (
    <nav
      className={`navbar ${styles.paddingX} w-full flex items-center  fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
          onClick={() => {
            setActive("");
            window.scrollTo(10, 10);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-slate-700 text-[30px] font-bold cursor-pointer">
            Connect+
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-slate-700" : "text-slate-700"
              } text-[22px] font-medium cursor-pointer relative`}
              onClick={() => setActive(link.title)}
            >
              {link.id === "blogs" ? (
                <a
                  href="https://connectplus.org.uk/wp/"
                  className="text-inherit no-underline"
                  // to={`/${link.id}`}
                >
                  {link.title}
                  <span className="hover-underline"></span>
                </a>
              ) : (
                <a className="text-inherit no-underline" href={`#${link.id}`}>
                  {link.title}
                  <span className="hover-underline"></span>
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gainsboro absolute top-20 right-0 left-0 mx-2 my-2 z-10 rounded-md sm:relative sm:bg-transparent sm:p-0 sm:flex sm:w-auto sm:flex-grow sm:items-center`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-black"
                  } font-poppins font-medium cursor-pointer text-[18px] relative`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.id === "blogs" ? (
                    <a
                      href="https://connectplus.org.uk/wp/"
                      className="text-inherit no-underline"
                      // to={`/${link.id}`}
                    >
                      {link.title}
                      <span className="hover-underline"></span>
                    </a>
                  ) : (
                    <a
                      className="text-inherit no-underline"
                      href={`#${link.id}`}
                    >
                      {link.title}
                      <span className="hover-underline"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
