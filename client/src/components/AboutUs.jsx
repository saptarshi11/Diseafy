import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Investing in your health today yields abundant rewards tomorrow. 
            Let us be your partners in proactive care, 
            safeguarding your vitality for a fulfilling future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
