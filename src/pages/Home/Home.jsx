import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Admission from "./Admission";
import Donors from "./Donors";
import FoundingMembers from "../FoundingMembers/FoundingMembers";
import OurClasses from "../OurClasses/OurClasses";
import Chairman from "../Chairman/Chairman";

const Home = () => {
  return (
    <div>
      <Banner />
      <Chairman />
      <Admission />
      <OurClasses />
      <Hero />
      <Donors />
      <FoundingMembers />
    </div>
  );
};

export default Home;
