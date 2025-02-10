import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Admission from "./Admission";
import Donors from "./Donors";
import FoundingMembers from "../FoundingMembers/FoundingMembers";
import OurClasses from "../OurClasses/OurClasses";
import Chairman from "../Chairman/Chairman";
import ExamResult from "../ExamResult/ExamResult";
import Notice from "../Notice/Notice";

const Home = () => {
  return (
    <div>
      <Banner />
      <Chairman />
      <Notice />
      <Admission />
      <OurClasses />
      <ExamResult />
      <Hero />
      <Donors />
      <FoundingMembers />
    </div>
  );
};

export default Home;
