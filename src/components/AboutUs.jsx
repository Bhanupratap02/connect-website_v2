/** @format */

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { taximap2, locaTaxi } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    gsap.to(".about-us-section", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      yPercent: -30,
    });
  }, []);

  return (
    <section
      id="about"
      className="about-us-section w-screen h-screen md:h-[60vh] relative bg-white text-left text-gray font-montserrat"
    >
      <div className="absolute top-16 left-0 w-full h-full flex flex-col items-start justify-start px-4 md:px-16 lg:px-32">
        <div className="absolute top-[90px] left-0 bg-lightgreen w-[231px] h-[86px] p-4" />
        <div className="absolute top-[150px] left-[88px] text-[35px] tracking-[0.05em] font-extrabold text-slate-700 inline-block w-[80%] md:w-[484px] h-[42px] [text-shadow:3px_6px_6px_rgba(72,_71,_71,_0.25)]">
          About Us
        </div>
        <img
          className="absolute sm:top-[148px] top-[445px] right-0 w-[90%] md:w-[690px] h-full max-lg:hidden"
          alt="Taxi map"
          src={taximap2}
          style={{ filter: "contrast(115%)" }}
        />
        <div className="absolute top-[245px] left-4 md:left-[88px] tracking-[0.03em] font-light text-slate-700 inline-block w-[90%] md:w-[682px] h-[314px] bg-white bg-opacity-80 p-4 text-lg md:text-xl">
          <p className="m-0 text-[1.2rem] md:text-[1.4rem] font-normal">
            Connect+ is an innovative ride-hailing platform that revolutionizes
            transportation by offering transparent pricing and a unique bid
            system. Designed for both passengers and drivers, Connect+ ensures a
            seamless, safe, and convenient travel experience. With features like
            real-time tracking, flexible fare options, and eco-friendly vehicle
            choices, Connect+ sets itself apart in the competitive ride-hailing
            market. The platform prioritizes user control, reliability, and
            sustainability, making it the go-to choice for modern transportation
            needs. Whether for daily commutes, special events, or leisure
            travel, Connect+ provides a superior and tailored transportation
            solution.
          </p>
          <img
            className="block lg:hidden w-full mt-4 object-cover "
            alt="Local Taxi"
            src={locaTaxi}
          />
        </div>

        <div className="absolute top-[148px] left-[288px]  box-border w-0.7 h-[55px] border-r-[3px] border-solid border-[#A4A4A4]" />
        <div className="absolute top-[200px] left-[88px]  box-border w-[202px] h-0.7 border-t-[3px] border-solid border-[#A4A4A4]" />
        <div className="absolute top-[148px] left-[288px]  box-border w-[80%] h-0.7 border-t-[3px] border-solid border-[#A4A4A4]" />
      </div>
    </section>
  );
};

export default AboutUs;
