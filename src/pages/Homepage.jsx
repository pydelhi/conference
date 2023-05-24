import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";


const Homepage = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Homepage;
