import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-scroll";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top bg-#27272A ">
    <div className="container mt-3">
      <div className="d-flex align-items-center">
        <span className="text-warning fs-1 me-1 fw-bolder">
          Z
        </span>
        <span
          className="bg-warning rounded-circle mt-3"
          style={{ width: "10px", height: "10px", display: "flex" }}
        ></span>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-decoration-none text-light w-25 fs-6 fw-semibold nav-link"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                // color: "inherit", 
                textDecoration: "none",
                display: "block", 
                padding: "10px", 
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-decoration-none text-light w-25 fs-6 fw-semibold nav-link"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                // color: "inherit", 
                textDecoration: "none",
                display: "block", 
                padding: "10px", 
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="text-decoration-none text-light w-25 fs-6 fw-semibold nav-link"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                // color: "inherit", 
                textDecoration: "none",
                display: "block", 
                padding: "10px", 
              }}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="text-decoration-none text-light w-25 fs-6 fw-semibold nav-link"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                // color: "inherit", 
                textDecoration: "none",
                display: "block", 
                padding: "10px", 
              }}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="text-decoration-none text-light w-25 fs-6 fw-semibold nav-link"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                // color: "inherit", 
                textDecoration: "none",
                display: "block", 
                padding: "10px", 
              }}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        <Link
          to="contact-me"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}  // Adjust offset as needed to align with your section
          className="nav-link"
        >
          <button type="button" className="btn btn-light rounded-4">
            <FontAwesomeIcon icon={faAddressBook} className="me-2" />
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  </nav>
    // <div className="d-flex justify-content-between align-items-center mb-5 container mt-4"
    //     style={{ marginBottom: "190px" }}
    //   >
    //     <div className="d-flex align-items-center">
    //       <span className="text-warning fs-1 me-1 fw-bolder" c>
    //         Z
    //       </span>
    //       <span
    //         className="bg-warning rounded-circle mt-3"
    //         style={{ width: "10px", height: "10px", display: "flex" }}
    //       ></span>
    //     </div>

    //     <div>
    //       <ul className="list-unstyled d-flex justify-content-between">
    //         <li className="list-inline-item">
    //         <Link
    //             to="home"
    //             spy={true}
    //             smooth={true}
    //             duration={500}
    //             className="text-decoration-none text-light w-25 fs-6 fw-semibold"
                // style={{
                //   fontFamily: "'Noto Sans', sans-serif",
                //   color: "inherit", 
                //   textDecoration: "none",
                //   display: "block", 
                //   padding: "10px", 
                // }}
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li className="list-inline-item">
    //         <Link
    //             to="about"
    //             spy={true}
    //             smooth={true}
    //             duration={500}
    //             className="text-decoration-none text-light w-25 fs-6 fw-semibold"
    //             style={{
    //               fontFamily: "'Noto Sans', sans-serif",
    //               color: "inherit", 
    //               textDecoration: "none",
    //               display: "block", 
    //               padding: "10px", 
    //             }}
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li className="list-inline-item">
    //         <Link
    //             to="project"
    //             spy={true}
    //             smooth={true}
    //             duration={500}
    //             className="text-decoration-none text-light w-25 fs-6 fw-semibold"
    //             style={{
    //               fontFamily: "'Noto Sans', sans-serif",
    //               color: "inherit", 
    //               textDecoration: "none",
    //               display: "block", 
    //               padding: "10px", 
    //             }}
    //           >
    //             Portfolio
    //           </Link>
    //         </li>
    //         <li className="list-inline-item">
    //         <Link
    //             to="home"
    //             spy={true}
    //             smooth={true}
    //             duration={500}
    //             className="text-decoration-none text-light w-25 fs-6 fw-semibold"
    //             style={{
    //               fontFamily: "'Noto Sans', sans-serif",
    //               color: "inherit", 
    //               textDecoration: "none",
    //               display: "block", 
    //               padding: "10px", 
    //             }}
    //           >
    //             Experience
    //           </Link>
    //         </li>
    //         <li className="list-inline-item">
    //         <Link
    //             to="home"
    //             spy={true}
    //             smooth={true}
    //             duration={500}
    //             className="text-decoration-none text-light w-25 fs-6 fw-semibold"
    //             style={{
    //               fontFamily: "'Noto Sans', sans-serif",
    //               color: "inherit", 
    //               textDecoration: "none",
    //               display: "block", 
    //               padding: "10px", 
    //             }}
    //           >
    //             Blog
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="d-flex align-items-center">
    //     <Link
    //       to="contact-me"
    //       spy={true}
    //       smooth={true}
    //       duration={500}
    //       offset={-70}  // Adjust offset as needed to align with your section
    //     >
    //       <button type="button" className="btn btn-light rounded-4">
    //         <FontAwesomeIcon icon={faAddressBook} className="me-2" />
    //         Contact Me
    //       </button>
    //     </Link>
    //   </div>
    //   </div>
  )
}

export default TopNav