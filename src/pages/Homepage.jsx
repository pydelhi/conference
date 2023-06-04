import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import About from "../components/About";
import Faq from "../components/Faq";
import faqData from "../data/faqData.json";
import Code from "../components/Code";
import Community from "../components/Community";
import Schedule from "../components/Schedule";
import Register from "../components/Register";
import  { useState } from "react";


const Homepage = () => {
  const [shortCoc, setShortCoc] = useState(false);
  const handleShortCoc = (recieved) => {
    setShortCoc(recieved);
  };
  const [longCoc, setLongCoc] = useState(false);
  const handleLongCoc = (recieved) => {
    setLongCoc(recieved);
  };
  return (
    <div id="home"   >
      <Navbar />
      <Hero  />
      <About />
      <Schedule />
      <Faq 
       data={faqData} 
      />
      <Code 
       handleShortCoc={handleShortCoc} 
       shortCoc={shortCoc} 
       longCoc={longCoc}
       handleLongCoc={handleLongCoc}
      />
      <Community />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  );
};

export default Homepage;
