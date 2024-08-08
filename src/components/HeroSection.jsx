/** @format */

import { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  LineHero,
  heroMain as heroMain1,
  heroMain2,
  heroMain3,
} from "../assets";

gsap.registerPlugin(ScrollTrigger);
const navbarHeight = -72;
const HeroSection = () => {
  const images = [heroMain1, heroMain2, heroMain3];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: `top+=${navbarHeight}px top`,
        end: "+=2000", // Adjust this value to control the scroll distance for the entire animation
        scrub: true,
        pin: true,
      },
    });

    images.forEach((image, index) => {
      tl.to(`.car-image-${index + 1}`, {
        opacity: 1,
        duration: 1,
      }).to(`.car-image-${index + 1}`, {
        opacity: 1,
        duration: 1,
        delay: 1, // This controls how long each image stays visible
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="hero-section relative flex flex-col items-center w-full h-screen top-16 font-montserrat text-[50px] text-[#444] overflow-hidden bg-white"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`car-image-${
            index + 1
          } absolute top-[10%] md:top-[12%] lg:top-[13%] left-0 inset-10 w-full h-[70%] xl:h-[65%] bg-no-repeat bg-cover bg-center `}
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === 0 ? 1 : 0,
            // filter: "contrast(110%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === 0 ? 1 : 0 }}
        />
      ))}

      <div className="absolute top-[8%] flex flex-col items-center w-full z-10 px-4">
        <div className="flex justify-center items-center w-full mb-4">
          <motion.div
            className="h-[3px] bg-[#92e29d] flex-1"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <motion.span
            className="text-5xl text-gray-800 shadow-md font-paytone-one font-extrabold px-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            CONNECT+
          </motion.span>
          <motion.div
            className="h-[3px] bg-[#92e29d] flex-1"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5 }}
          ></motion.div>
        </div>

        <motion.span
          className="text-3xl text-gray-800 font-light:text-[44px] max-md: max-sm:text-[34px] z-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          the everything app!
        </motion.span>
      </div>

      {/* <img
        src={LineHero}
        alt="Line92825"
        className="absolute left-[0] top-[66px] w-[413px] basis-1/3 max-sm:hidden z-10"
      /> */}

      <div
        className="absolute max-md:top-[80%] top-[78%] left-0 w-full h-[140px]
         bg-[#92e29d] max-lg:block hidden xl:block
         "
        style={{ filter: "contrast(110%)", backgroundColor: "EEEEEE" }}
      ></div>
    </section>
  );
};
//  bg-[#d8d9d8]
export default SectionWrapper(HeroSection, "");
