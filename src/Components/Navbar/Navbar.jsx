import React from "react";
import logo from "../../assets/Enver logo.png";
import "./NavbarCustom.css";

const Navbar = () => {
  const handleToggle = () => {
    let header = document.querySelector("header");
    header.classList.toggle("active");
  };

  return (
    <>
      <header className="navbar_relative">
        <img src={logo} alt="logo" className="logo" />
        <div onClick={handleToggle} className="menuToggle"></div>
        <ul className="nav">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Portfolio">Our Project</a>
          </li>
          <li>
            <a href="#About">About us</a>
          </li>
          <button className="button">Contact us</button>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
