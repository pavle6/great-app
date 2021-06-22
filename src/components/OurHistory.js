import React from "react";
import "../styles/our_history.scss";
import historyImg from '../images/our-history.png';
const OurHistory = () => {
  return (
    <div className="container">
      <div className="left-row">
        <div className="title">
          <h2>elevate your financial</h2>
          <h1>
            {" "}
            <span>our</span> history
          </h1>
        </div>

        <div className="body-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum su spendisse ultrices gravida. Risus commodo viverra maec enas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <button className="read-more">
            <h2>Read More</h2>
        </button>
      </div>
      <div className="right-row">
          <div className="image">
              <img src={historyImg} alt="history" />
          </div>
      </div>
    </div>
  );
};

export default OurHistory;
