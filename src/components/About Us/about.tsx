import React from 'react';
import TEAM from "../../assets/images/header.jpg";
import './about.scss';


const About: React.FC = () => {
  return (
    <section className="ABOUT">
    <div className="About">
      <h1>ABOUT US</h1>
      <p>Filler paragraph text stuff about us</p>
    </div>
    <div className="TEAMPICTURE">

      <img src={TEAM} width="50%" alt="HackMerced Team"/>
    </div>
    <div className="about-us-text">
      <p>
        hellloo
      </p>

    </div>
    </section>
  );
};

export default About;