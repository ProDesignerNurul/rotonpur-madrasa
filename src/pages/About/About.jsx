import React from "react";
import NavBar from "../shared/NavBar";
import OurGallery from "./OurGallery";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <OurGallery />
      </div>
    </div>
  );
};

export default About;
