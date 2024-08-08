/** @format */

import React, { useEffect } from "react";
import { Ellipse, sidevector, playstore, appstore } from "../assets"; // Make sure you import the new assets
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Download = () => {
  useEffect(() => {
    gsap.fromTo(
      ".download-section",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".download-section",
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full sm:h-screen h-screen mx-auto download-section flex items-center">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            className="rounded-full w-[364px] h-[364px] md:w-[464px] md:h-[464px] lg:w-[574px] lg:h-[574px] object-cover"
            alt="Ellipse"
            src={Ellipse}
          />
        </div>
        <div className="w-full max-md:px-2 md:w-1/2 flex flex-col justify-center items-start md:pl-10">
          <div className="text-[50px] lg:text-[60px] tracking-[0.03em] text-teal leading-none [text-shadow:10px_9px_14px_rgba(0,_0,_0,_0.25)] mb-6">
            <p className="m-0">{`Experience the `}</p>
            <p className="m-0">{`Future of `}</p>
            <p className="m-0">{`Ride-Hailing! `}</p>
          </div>
          <div className="w-full max-w-md text-[35px] text-seagreen">
            <div className="rounded-[30px] bg-lightgreen w-full h-[170px] p-6 flex flex-col justify-center items-start">
              <div className="tracking-[0.03em] [text-shadow:10px_9px_14px_rgba(0,_0,_0,_0.25)] mb-4">
                <i className="font-bold">Download</i>
                <i className="font-black">{` Connect+ `}</i>
              </div>
              <div className="flex items-center w-full">
                <a
                  href="https://play.google.com/store/apps/details?id=com.connect.driverapp"
                  className="mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={playstore}
                    alt="Download from Play Store"
                    className="w-40 h-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/app/connect-plus/id6504287764"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Download from App Store"
                    className="w-40 h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
