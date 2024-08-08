/** @format */

import React from "react";
import { contactImg, profile, mail } from "../assets";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="grid sm:grid-flow-col grid-flow-row grid-cols-2  mt-5 pb-5 mb-5  h-screen">
      <div className="col-span-1  relative w-full bg-[#92E29D]  mt-10">
        <div className="mx-10 mt-10">
          <p className=" text-slate-700 text-[30px] tracking-[0.05em] font-montserrat [text-shadow:3px_6px_6px_rgba(72,_71,_71,_0.25)] font-semibold">
            Contact Us!
          </p>
        </div>
      </div>
      <img
        src={contactImg}
        alt="ConnectPayImg"
        className=" col-span-1 mt-18 w-full  h-full bg-cover "
      />
      {/* <div className="w-full relative bg-white h-[615px] overflow-hidden text-left text-lg text-darkgray font-montserrat">
      			<div className="absolute top-[-56px] left-[-72px] bg-lightgreen w-[648px] h-[775px]" />
      			<div className="absolute top-[106px] left-[64px] text-[30px] tracking-[0.05em] text-white inline-block w-[245px] h-[42px] [text-shadow:3px_6px_6px_rgba(72,_71,_71,_0.25)]">Contact Us!</div>
      			<div className="absolute top-[189px] left-[64px] rounded-smi bg-gray w-[439px] h-[70px] opacity-[0.8]" />
      			<div className="absolute top-[292px] left-[63px] rounded-smi bg-white w-[439px] h-[70px] opacity-[0.8]" />
      			<div className="absolute top-[395px] left-[64px] rounded-[22px] bg-white w-[439px] h-[120px] opacity-[0.8]" />
      			<div className="absolute top-[211px] left-[89px] tracking-[0.04em] inline-block w-[79px] h-[26px]">Name</div>
      			<div className="absolute top-[314px] left-[89px] tracking-[0.04em] inline-block w-24 h-[26px]">Email ID</div>
      			<div className="absolute top-[416px] left-[89px] tracking-[0.04em] inline-block w-24 h-[26px]">Message</div>
      			<img className="absolute top-[314px] left-[439px] w-7 h-7 overflow-hidden" alt="" src={mail} />
      			<img className="absolute h-[3.25%] w-[1.5%] top-[34.8%] right-[61.6%] bottom-[61.95%] left-[36.91%] max-w-full overflow-hidden max-h-full" alt="" src={profile} />
      			<img className="absolute top-[88px] left-[576px] w-[792px] h-[527px] object-cover" alt="" src={contactImg} />
      			<img className="absolute top-[567px] left-[63px] max-h-full w-[1140px]" alt="" src="Line 14.svg" />
    	</div> */}
    </div>
  );
};

export default Contact;
