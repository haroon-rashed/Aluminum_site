import React from "react";
import ProductShowcase from "./ProductShowcase";
import Navbar from "../Home/Navbar";
import AboutSection from "./AboutSection";
import StylesSection from "./StylesSection";
import AboutFixedImage from "./AboutFixedImage";
import Footer from "../Home/Footer";
import RecentlyViewedProduct from "./RecentlyViewedProduct";

const About = () => {
  return (
    <div>
      <Navbar />
      <ProductShowcase />
      <AboutSection />
      <StylesSection />
      <AboutFixedImage />
      <RecentlyViewedProduct />
      <Footer />
    </div>
  );
};

export default About;
