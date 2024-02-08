import React from "react";
import Home from "./Home";
import About from "./About";
import ContactMe from "./ContactMe";
import TopNav from "./TopNav";
import Project from "./Project";
import Experience from "./Experience";

const Portfolio = () => {
  return (
    <div className="container mt-4">
      <TopNav />
      <Home />
      <About />
      <Project />
      <Experience />
      <ContactMe />
    </div>
  );
};

export default Portfolio;
