import React from "react";
import "../styles/slider.scss";
import leftArrow from '../images/straight-left-arrow.png';
import rightArrow from '../images/straight-right-arrow.png';
import slide1 from '../images/Slide 1.png';
import slide2 from '../images/Slide 2.png';
import slide3 from '../images/Slide 3.png';
import slide4 from '../images/Slide 4.png';
const Slider = () => {
  return (
    <div className="container">
      <div className="left-row">
        <div className="box">
        <div className="text">
          <h1>Your Business Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, &ensp; ut enim
            ad minim veniam, quis nostrud exercitation <span>ullamco laboris nisi ut
            aliquip ex ea commodo consequat Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</span> 
          </p>
        </div>

        <button className="button-try">
            <h2>Try Now</h2>
        </button>

        </div>

      </div>
      <div className="right-row">
          <div className="box">
            <div className="slider-controls">
                <div className="arrows">
                    <img src={leftArrow} alt=""/>
                    <img src={rightArrow} alt=""/>
                </div>

                <div className="dots">
                <div className="dot-one"></div>
                <div className="dot-two"></div>
                <div className="dot-three"></div>
                <div className="dot-for"></div>
                </div>
            </div>
            <div className="slides">
                <img className="slide1" src={slide1} alt=""/>
                <img className="slide2" src={slide2} alt=""/>
                <img className="slide3" src={slide3} alt=""/>
                <img className="slide4" src={slide4} alt=""/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Slider;
