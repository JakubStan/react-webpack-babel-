import React from "react";
import "./hero.scss";
import arrowDown from "../../../assets/arrow-down.png";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-bg">
          <div className="hero-content">
            <div className="hero-date">
              <h2>OD 1965</h2>
            </div>
            <h1>
              WINNICA <br></br>
              KÓNYA BOR
            </h1>
            <div className="navigation">
              <div className="arrow">
                <img src={arrowDown} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
