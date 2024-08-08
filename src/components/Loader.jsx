/** @format */

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { logo } from "../assets"; // Make sure to replace this with the correct path to your logo

const PreLoader = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls
        .start({
          scale: 0.5,
          x: "-50vw",
          y: "-60vh",
          transition: { duration: 1.5, ease: "easeInOut" },
        })
        .then(() => {
          controls
            .start({
              opacity: 0,
              transition: { duration: 0.5 },
            })
            .then(() => {
              onComplete();
            });
        });
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, [controls, onComplete]);

  return (
    <motion.div
      id="pre-loader"
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#eee]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-[600px] h-[600px] flex items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(146,226,157,0) 0%, rgba(146,226,157,0.7) 20%, rgba(146,226,157,1) 50%, rgba(146,226,157,0) 70%)",
        }}
        initial={{ scale: 1 }}
        animate={controls}
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="w-40 h-40 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.span
            className="text-gray-800 font-bold"
            style={{ fontSize: "2.5rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            CONNECT+
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
