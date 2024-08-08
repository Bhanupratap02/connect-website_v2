/** @format */

import React from "react";
import "./Bar.css";
import { EllipseBarScroll } from "../assets";

const Bar = () => {
  return (
    <div id="blog" className=" blog-card bar relative mb-10">
      <span className="bar_content text-[60px]">
        <div className="bar_item">
          <img src={EllipseBarScroll} alt="EllipseBarScroll" />
          <p>Car Rentals&nbsp;</p>
        </div>
        <div className="bar_item">
          <img src={EllipseBarScroll} alt="EllipseBarScroll" />
          <p>Rides&nbsp;</p>
        </div>
        <div className="bar_item">
          <img src={EllipseBarScroll} alt="EllipseBarScroll" />
          <p>Taxies&nbsp;</p>
        </div>
        <div className="bar_item">
          <img src={EllipseBarScroll} alt="EllipseBarScroll" />
          <p>Bikes&nbsp;</p>
        </div>
      </span>
    </div>
  );
};

export default Bar;
