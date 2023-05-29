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
// import Paint from "../components/Paint";


const Homepage = () => {
  

  return (
    <div id="home">
      <Navbar  />
      {/* <Paint /> */}
      <Hero />
      <About />
      <Faq data={faqData} />
      <Code />
      <Community />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Homepage;

