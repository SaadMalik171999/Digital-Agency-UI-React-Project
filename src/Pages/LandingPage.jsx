import React from "react";
import Contact from "../Components/Contact Section/Contact";
import Hero from "../Components/Hero Section/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Portfolio from "../Components/Portfolio Section/Portfolio";
import Service from "../Components/Service Section/Service";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Portfolio />
      <Contact />
    </>
  );
};

export default LandingPage;
