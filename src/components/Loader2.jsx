/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import preloader from "../assets/preloader.gif";

const PreLoader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to("#pre-loader", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          onComplete();
        },
      });
    }, 3800); // Display the loader for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="pre-loader"
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "#f5f5dc" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src={preloader}
          alt="Preloader GIF"
          className="w-full h-full  md:scale-110 lg:scale-125"
          style={{ filter: "contrast(120%)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
