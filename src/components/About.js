import React from "react";
import "../styles/about.scss";
import companyImage from "../images/companyImage.png";
const About = () => {
  return (
    <div className="container">
      <div className="left-row">
        <img src={companyImage} alt="" />
      </div>
      <div className="right-row">
        <div className="box">
          <div className="text">
            <div className="title">
              <h2>innovation. passion. creativity.</h2>
              <h1><span>our</span> company</h1>
            </div>
            <div className="body-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum su spendisse ultrices gravida. Risus commodo viverra maec
                enas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor. <br/> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                su spendisse ultrices gravida.
              </p>
            </div>
          </div>

          <button className="read-more">
              <h2>Read More</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
