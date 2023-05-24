import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import About from "../components/About";
import Faq from "../components/Faq"
import faqData from "../data/faqData.json"



const Homepage = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Faq data={faqData}/>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Homepage;
