/** @format */

import React, { useEffect } from "react";
import { ConnectPayImg } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Bar.css";

gsap.registerPlugin(ScrollTrigger);

const ConnectPay = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".connect-pay-section",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".connect-pay-section .connect-pay-box",
      { x: -200, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
    ).fromTo(
      ".connect-pay-section img",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=1"
    );
  }, []);

  return (
    <div
      id="services"
      className="connect-pay-section mt-20 grid grid-flow-row  lg:grid-cols-3 gap-6 lg:gap-10 md:gap-0 mb-10"
    >
      <div className="connect-pay-box w-full relative rounded-[39px] bg-[#ffd102] h-auto md:h-[338px] ml-2 p-6 md:p-10 col-span-2 md:col-span-2 md:mr-0">
        <div className="mx-0 md:mx-20">
          <p className="font-montserrat text-[#3a3a3a] text-[16px] md:text-[18px] inline-block font-semibold [text-shadow:10px_9px_14px_rgba(0,_0,_0,_0.25)]">
            Everyday payments made easy with,
          </p>
          <br />
          <i className="font-montserrat text-[#06a35b] text-[24px] md:text-[40px][text-shadow:10px_9px_14px_rgba(0,_0,_0,_0.25)] tracking-[0.05em]">
            CONNECT+ PAY
          </i>
          <br />
          <br />
          <div>
            <p className="text-[14px] md:text-[19px] font-montserrat tracking-[0.03em] text-[#363636] inline-block [text-shadow:10px_9px_14px_rgba(0,_0,_0,_0.25)]">
              Connect+ Pay is a secure and user-friendly payment gateway
              integrated within the Connect+ platform. It enables seamless
              transactions for both passengers and drivers, ensuring quick and
              hassle-free payments.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center col-span-3 md:col-span-1 md:ml-0">
        <img
          src={ConnectPayImg}
          alt="ConnectPayImg"
          className="w-full md:w-auto md:h-[338px] rounded-[20px] md:rounded-none"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ConnectPay;
