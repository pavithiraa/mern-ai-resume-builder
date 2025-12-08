import React from "react";
import Banner from "../components/home/Banner";
import HeroCopy from "../components/home/HeroContainer";
import Features from "../components/home/features";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />

      <HeroCopy />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
