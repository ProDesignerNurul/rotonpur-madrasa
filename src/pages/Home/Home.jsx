import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Admission from "./Admission";
import Donors from "./Donors";

const Home = () => {
  return (
    <div>
      <Banner />
      <Admission />
      <Hero />
      <Donors />
    </div>
  );
};

export default Home;
