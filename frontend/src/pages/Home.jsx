import React from "react";
import Banner from "../components/home/Banner";
import HeroCopy from "../components/home/HeroContainer";
import Features from "../components/home/features";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <HeroCopy />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
