import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import About from "../components/About";
import Faq from "../components/Faq"
import faqData from "../data/faqData.json"
import Code from "../components/Code";
import Community from "../components/Community";
import Schedule from "../components/Schedule";
import Register from "../components/Register";


const Homepage = () => {
  

  return (
    <div id="home">
      <Navbar  />
      <Hero />
      <About />
      <Schedule/>
      <Faq data={faqData} />
      <Code />
      <Community />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  );
};

export default Homepage;
