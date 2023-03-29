import React from "react";
import "../../App.css";
import Image from "../../assets/Landing Image.png";

import { HiArrowUpRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <>
      <section id="Home">
        <div className="hero_section">
          <div className="hero_left">
            <h1>Build Your Awesome Platform</h1>
            <p>
              Enver studio is a digital studio that offers several services such
              as UI/UX Design to developers, we will provide the best service
              for those of you who use our services.
            </p>
            <button className="service_button">
              Our Services
              <HiArrowUpRight className="arrow_icon" fontSize={17} />
            </button>
          </div>

          <div className="hero_right">
            <img src={Image} alt="landing pic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
