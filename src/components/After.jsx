/** @format */

import React, { useEffect } from "react";
import { locaTaxi } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const After = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".after-section",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".after-section .left-box",
      { x: -200, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        ".after-section .right-box",
        { x: 200, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
        "-=1"
      )
      .fromTo(
        ".after-section img",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
      );
  }, []);

  return (
    <>
      <section className="after-section grid grid-flow-row md:grid-flow-col md:grid-cols-2 pt-[75px] h-[calc(100vh-45px)] items-center relative gap-x-24 gap-y-10 md:gap-y-0 justify-start">
        <div className="left-box relative bg-[#92e29d]  h-auto md:h-full z-0 py-6 lg:px-12 flex flex-col md:items-start items-center justify-center rounded-lg md:rounded-none">
          <h3 className="text-black text-center md:text-left text-[32px] font-extrabold tracking-[0.05em] [text-shadow:3px_6px_6px_rgba(72,_71,_71,_0.25)] px-6 md:px-10">
            Our Vision
          </h3>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black text-center   md:text-left font-montserrat tracking-[0.03em] mt-4 px-6 md:px-10">
            Connect+ was founded with a clear vision: to create a ride-hailing
            platform that prioritizes user control, reliability, and
            sustainability. We believe that everyone deserves access to
            convenient and affordable transportation options, and we are
            committed to making this a reality through our innovative features
            and user-centric approach.
          </p>
        </div>

        <div className="right-box relative rounded-lg md:rounded-none h-auto md:h-[80%] z-0 px-6 py-2 lg:py-8 flex flex-col justify-center lg:justify-start items-center md:items-start bg-[#ffd102]">
          <h3 className="text-black text-center md:text-left text-[24px] sm:text-[28px] md:text-[32px] font-extrabold tracking-[0.05em] [text-shadow:3px_6px_6px_rgba(72,_71,_71,_0.25)] px-6 md:px-10">
            Our Mission
          </h3>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black text-center md:text-left font-montserrat tracking-[0.03em] mt-0 px-6 md:px-8 lg:px-10 lg:pl-10">
            Welcome to Connect+, the innovative ride-hailing platform that
            redefines the transportation experience. At Connect+, we are
            dedicated to providing a seamless, safe, and efficient travel
            solution for both passengers and drivers. Our mission is to
            revolutionize the way people move, leveraging advanced technology to
            offer unparalleled convenience and transparency in the ride-hailing
            industry.
          </p>
        </div>

        <img
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-auto h-[300px] md:h-[337px] object-cover z-10 max-lg:hidden"
          alt="Local Taxi"
          src={locaTaxi}
          style={{ filter: "contrast(110%)" }}
        />
      </section>
    </>
  );
};

export default After;
