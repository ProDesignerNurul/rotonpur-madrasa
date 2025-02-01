import React from "react";
import NavBar from "../shared/NavBar";
import OurGallery from "./OurGallery";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="p-4 md:p-8">
        <div className="pt-16">
          <OurGallery />
        </div>
      </div>
    </div>
  );
};

export default About;
