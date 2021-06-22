import React from "react";
import "../styles/computer.scss";
import ComputerImg from "../images/Computer.png";
import SignatureImg from '../images/Signature.png';
const Computer = () => {
  return (
    <div className="container">
      <div className="headings">
        <h1>
          <span>what we</span>offer
        </h1>
      </div>
      <div className="text-section">
        <div className="computer">
          <img src={ComputerImg} alt="" />
          <div className="background">
            <div className="text">
              <h2>Why we best Consulting office in London?</h2>
              <h3>
                Rapid solutions to the most complex business challenges with
                cooperative process-driven.
              </h3>
              <h4>
                We are an elite team of consultants whose mission is maximize
                stakeholder value. From roadmap planning and solution
                implementation, to maintenance and support.
              </h4>
            </div>
            <div className="signature">
                <img src={SignatureImg} alt="" />
            </div>
            <button className="services">
                <h2>see all services</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computer;
