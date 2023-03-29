import React from "react";
import "../../App.css";
import { ServiceData } from "./ServiceList";

const Service = () => {
  return (
    <>
      <section id="Services">
        <div className="service_section">
          <h1>The Service We Provide For You</h1>

          <div className="service_sub_section">
            {ServiceData?.map((value) => {
              return (
                <>
                  <div className="service_div" key={value.id}>
                    <img src={value?.url} alt="pic" />
                    <h1>{value?.title}</h1>
                    <p>{value?.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
