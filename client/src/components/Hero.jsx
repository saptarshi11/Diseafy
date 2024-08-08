import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Your Health',
    1000,
    'Our Responsibility',
    1000,
    'Our Mission',
    1000,
    'Our Vision',
    1000,
  ]}
  speed={30}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
        </h1>
        <p>
        Investing in your health today yields abundant rewards tomorrow. 
        Let us be your partners in proactive care, 
        safeguarding your vitality for a fulfilling future
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
