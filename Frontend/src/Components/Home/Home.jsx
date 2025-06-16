import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import TestimonialSlider from "./TestimonialSlider";
import ProductCards from "./ProductCard";
import SteelDoorsShowcase from "./SteelDoorShowCase";
import FixedImage from "./FixedImage";
import SteelWindowsDoorsFAQ from "./SteelWindowsDoorsFAQ";
import PictureWindowComponent from "./PictureWindowComponent";
import TechnicalSpecsComponent from "./TechnicalSpecsComponent";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HeroSection />
      <ProductCards />
      <TestimonialSlider />
      <SteelDoorsShowcase />
      <FixedImage />
      <PictureWindowComponent />
      <SteelWindowsDoorsFAQ />
      <TechnicalSpecsComponent />
      <Footer />
    </>
  );
};

export default Home;
