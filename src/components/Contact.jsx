/** @format */

import React, { useEffect, useRef, useState } from "react";
import { contactImg, mail, profile } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const contactSection = contactRef.current;
    // Disable animations on small screens
    if (window.innerWidth > 640) {
      gsap.fromTo(
        contactSection.querySelector(".contact-title"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: contactSection.querySelector(".contact-title"),
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        contactSection.querySelectorAll(".input-container"),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: contactSection.querySelector(".input-container"),
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        contactSection.querySelector(".contact-image"),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: contactSection.querySelector(".contact-image"),
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        contactSection.querySelector(".send-button"),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: contactSection.querySelector(".send-button"),
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Contact@connectplus.org.uk?subject=Message from ${name}&body=${message} (from ${email})`;
    setName("");
    setEmail("");
    setMessage("");
    window.location.href = mailtoLink;
  };
  return (
    <div
      ref={contactRef}
      id="contact"
      className=" blog-card grid sm:grid-flow-col grid-flow-row grid-cols-1 sm:grid-cols-2 mt-5 pb-2 mb-5 h-screen"
    >
      <div className="col-span-1 relative w-full bg-[#92E29D] flex flex-col justify-center items-center py-10 sm:py-0">
        <div className="mx-10 mt-10 sm:mt-0 contact-title">
          <p className="text-slate-700 text-[30px] tracking-[0.05em] font-montserrat [text-shadow:3px_6px_6px_rgba(72,_71,_71,_0.25)] font-semibold text-center">
            Contact Us!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center mt-10"
        >
          <div className="relative mb-6 w-4/5 sm:w-3/5 input-container">
            <input
              type="text"
              className="w-full h-16 bg-white p-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#06a35b] text-lg text-slate-700 font-montserrat"
              placeholder="Name"
              // onFocus={(e) =>
              //   e.target.scrollIntoView({ behavior: "smooth", block: "center" })
              // }
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <img
              src={profile}
              alt="Profile Icon"
              className="absolute top-4 right-4 w-6 h-6"
            />
          </div>
          <div className="relative mb-6 w-4/5 sm:w-3/5 input-container">
            <input
              type="email"
              className="w-full h-16 bg-white p-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#06a35b] text-lg text-slate-700 font-montserrat"
              placeholder="Email ID"
              // onFocus={(e) =>
              //   e.target.scrollIntoView({ behavior: "smooth", block: "center" })
              // }
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <img
              src={mail}
              alt="Mail Icon"
              className="absolute top-4 right-4 w-6 h-6"
            />
          </div>
          <div className="relative mb-6 w-4/5 sm:w-3/5 input-container">
            <textarea
              className="w-full h-32 bg-white p-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#06a35b] text-lg text-slate-700 font-montserrat"
              placeholder="Message"
              // onFocus={(e) =>
              //   e.target.scrollIntoView({ behavior: "smooth", block: "center" })
              // }
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="relative w-4/5 sm:w-3/5">
            <button
              type="submit"
              className="w-full sm:w-1/4 h-12 bg-[#06a35b] text-white font-bold rounded-md shadow-sm hover:bg-[#05a04a] focus:outline-none focus:ring-2 focus:ring-[#06a35b] mt-4 send-button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-1 sm:mt-10 flex items-center justify-center">
        <img
          src={contactImg}
          alt="Contact Image"
          className="w-full h-72 sm:h-5/6 object-cover object-left contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;
