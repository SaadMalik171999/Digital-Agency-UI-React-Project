import React from "react";
import "../../App.css";
import logo from "../../assets/Enver logo.png";
const Contact = () => {
  return (
    <>
      <section id="About">
        <div className="contact_section">
          <div className="contact_sub_section">
            <h1>Contact us for the service you want to use</h1>
            <div>
              <button className="service_button">Contact us</button>
            </div>
          </div>

          <div className="contact_footer">
            <img src={logo} alt="logo" />
            <div className="contact_sub_footer">
              <ul>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <h3>© 2023 Enver, All Rights Reserved</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
