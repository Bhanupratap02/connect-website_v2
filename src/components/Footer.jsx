/** @format */

import React from "react";
import { londonview, footerArrow } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      id="Footer"
      className="  relative max-sm:min-h-[100vh] min-h-[90vh] overflow-hidden text-darkgray font-montserrat"
    >
      {/* London View Background */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden">
        <img className="w-full h-full object-cover" alt="" src={londonview} />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#666161] opacity-90" />

      {/* Content Wrapper */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4 md:p-8 flex flex-col justify-center items-center">
        {/* Connect+ Title and Arrow */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          {/* Connect+ Title */}
          <div className="text-3xl md:text-[4.5rem] text-slate-700 tracking-[0.07em] mb-4 md:mb-0 md:mr-4">
            Connect+
          </div>
          {/* Green Arrow */}
          <div className="flex justify-center items-center bg-teal w-12 h-12 md:w-[183px] md:h-24 rounded-[21px] shadow-md">
            <img className="w-8 h-8 md:w-16 md:h-16" alt="" src={footerArrow} />
          </div>
        </div>

        {/* Text */}
        <p
          className="text-center text-sm md:text-mid text-darkgray mb-8 pb-2 border-b-2 border-slate-700"
          style={{
            borderBottomColor: "#334155!important",
            borderBottom: "2px!important",
          }}
        >
          <span className="font-semibold">where</span>{" "}
          <span className="font-montserrat">convenience, safety</span> and{" "}
          <span className="font-semibold">transparency</span>{" "}
          <span className="font-montserrat">meet.</span>
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
          <div className="flex flex-col items-start text-gray-300 text-xs md:text-sm tracking-[0.04em]">
            <div className="font-bold mb-2">HELP</div>
            <div>FAQs</div>
            <div>Quote</div>
          </div>
          <div className="flex flex-col items-start text-gray-300 text-xs md:text-sm tracking-[0.04em]">
            <div className="font-bold mb-2">Legal Info</div>
            <Link to="/privacy-policy" className="text-inherit no-underline">
              <div>Privacy Policy</div>
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-inherit no-underline"
            >
              <div>Terms & Conditions</div>
            </Link>

            <div>Cookie Policy</div>
          </div>
          <div className="flex flex-col items-start text-gray-300 text-xs md:text-sm tracking-[0.04em]">
            <div className="font-bold mb-2">More from us</div>
            <div>Our Story</div>
            <div>Contact Us</div>
            <div>Sign In</div>
          </div>
        </div>

        {/* Address */}
        <div className="text-xs md:text-xl text-gainsboro-200 mt-8 text-center">
          270-272, Bath Road, <br />
          London, UK.
        </div>

        {/* Copyright */}
        <div className="text-xs md:text-lg text-lightgray mt-8 footer2">
          Copyrights 2024 All Rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
