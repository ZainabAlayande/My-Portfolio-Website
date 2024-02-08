import React from "react";
import Home from "./Home";
import About from "./About";
import ContactMe from "./ContactMe";
import TopNav from "./TopNav";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="container mt-4">
      <TopNav />
      <Home />
      <About />
      <Project />
      <ContactMe />
    </div>
  );
};

export default Portfolio;
