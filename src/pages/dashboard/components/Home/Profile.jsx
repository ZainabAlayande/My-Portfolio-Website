import React from "react";
// import Typical from "react-typical";
import "bootstrap/dist/css/bootstrap.min.css";
// import resume from "../../../../../src/assets/files/Resume.pdf";
// import Picture from "../../../../assets/images/Pic 3.jpg";
import "../../../../App.css";

export default function Profile() {
  return (
    <div className="wave">
      <div className="waveInner">
        <div>
          <h1 className="zainab">ZAINAB ALAYANDE</h1>
        </div>

        <div className="headline">
          <div className="home">Home</div>
          <div className="aboutMe">AboutMe</div>
          <div className="resume">Resume</div>
          <div className="project">Projects</div>
          <div className="experience">Experience</div>
        </div>
      </div>
    </div>
  );
}
