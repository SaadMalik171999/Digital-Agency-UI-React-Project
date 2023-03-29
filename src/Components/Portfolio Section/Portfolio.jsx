import React from "react";
import "../../App.css";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import Carousel from "react-elastic-carousel";

const Portfolio = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <section id="Portfolio">
        <div className="portfolio_section">
          <h1>Our Awesome Portfolio</h1>
          <div>
            <Carousel breakPoints={breakPoints}>
              <div className="carousel_pic">
                <img src={port1} alt="port1" />
              </div>

              <div className="carousel_pic">
                <img src={port2} alt="port2" />
              </div>

              <div className="carousel_pic">
                <img src={port3} alt="port3" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
