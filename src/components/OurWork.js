import React from "react";
import "../styles/our-work.scss";
import target from "../images/target.png";
import rectangle from "../images/Rectangle.png";
import megaphone from "../images/002-megaphone.png";
import rectangle2 from "../images/Rectangle2.png";
import search from "../images/003-search.png";

const OurWork = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>
          Our work is <span>more than research</span>
        </h1>
        <p>
          <center>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </center>{" "}
          <span>
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </span>
        </p>

        <div className="points">
          <div className="one">
            <div className="icon">
              <img src={target} alt="target" />
            </div>
            <div className="text">
              <h2>Awesome & Creative</h2>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="two">
          <div className="icon">
              <img src={rectangle} alt="rectangle" />
              <img src={megaphone} alt="megaphone" />
            </div>
            <div className="text">
              <h2>Developement Field</h2>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="three">
          <div className="icon">
              <img src={rectangle2} alt="rectangle2" />
              <img src={search} alt="search" />
            </div>
            <div className="text">
              <h2>Incredible Team</h2>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
