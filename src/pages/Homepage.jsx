import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import About from "../components/About";
import Faq from "../components/Faq"
import faqData from "../data/faqData.json"
// import Paint from "../components/Paint";
import Schedule from "../components/Schedule";


const Homepage = () => {
  

  return (
    <div id="home">
      <Navbar  />
      {/* <Paint /> */}
      <Hero />
      <About />
      <Schedule />
      <Sponsors />
      <Faq data={faqData} />
      <Footer />
    </div>
  );
};

export default Homepage;
