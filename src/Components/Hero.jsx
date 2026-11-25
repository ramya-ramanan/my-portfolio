import React from "react";
import Profile from "../assets/Profile.jpeg";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-image">
        <img src={Profile} alt="Ramya Ramanan" />
      </div>

      <div className="hero-content">

        <p className="hello">Hello, I'm</p>

        <h1>Ramya Ramanan</h1>
        <h2> Aspiring Web Developer</h2>

        <p className="hero-text">
          I am a passionate B.Tech IT student interested in web development and creating useful applications. </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn"> View Projects  </a>
          <a href="#contact" className="btn second-btn"> Contact Me </a>

        </div>

        <div className="social-links">

          <a href="https://github.com/" target="_blank"> GitHub </a>
        </div>

      </div>

    </div>
  );
};

export default Hero;