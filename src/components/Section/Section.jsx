import React from "react";
import "./Section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Yajat's Profile</h1>
        <p className="hero-subheading">Here Are some of my more details.</p>
        <a href="#" className="cta-button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
