import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import Picture from "../images/downloads/Zainab_4.png";

const Home = () => {
  function changeColor(element) {
    // Reset color for all links
    document.querySelectorAll(".list-unstyled a").forEach((link) => {
      link.style.color = "inherit";
      link.style.textDecoration = "none";
    });

    // Set new color for the clicked link
    element.style.color = "text-warning"; // Change to desired color
    element.style.textDecoration = "underline text-yellow"; // Change to desired underline style
  }

  return (
      <div className=" d-flex text-light justify-content-between" style={{marginTop: "10%"}}>
        <div className="" style={{marginTop: "12%", width: "60%"}}>
          <p className="fs-4 m-0 fw-lighter">Hello,</p>
          <div
            className="fs-1 fw-bolder"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            I'm <span className="text-warning">Zainab Alayande</span>
          </div>
          <div
            className="fs-1 fw-bolder"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Software Engineer
          </div>
          <div className="fs-6 fw-lighter">
            <p>
              I am skilled and passionate software engineer with experience in{" "}
              <br />
              crafting clean and efficient code for code maintainability.
            </p>
          </div>

          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-light rounded-4">
              <FontAwesomeIcon icon={faSuitcase} className="me-2" />
              Hire Me
            </button>
          </div>
        </div>

        <div className="">
          <img src={Picture} alt="ZainabAlayande.Img" style={{ width: "100%", height: "100%" }}/>
        </div>
      </div>
  );
};

export default Home;
