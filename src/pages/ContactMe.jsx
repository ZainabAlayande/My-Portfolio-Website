import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div className="container text-center mt-5 container">
      <h1 className="text-white fw-bold fs-1 mb-4">Contact Me</h1>
      <p className="text-white">
        Please fill out the form below to discuss any work opportunities.
      </p>

      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            rows="4"
            style={{ resize: "vertical" }}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-light text-black">
          Submit
        </button>
      </form>

      <div className="mt-4">
        {/* Social Media Icons */}
        <a href="your-linkedin-url" className="text-white me-3">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="your-facebook-url" className="text-white me-3">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="your-youtube-url" className="text-white">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
