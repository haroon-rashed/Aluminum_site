import React from "react";
import Navbar from "../Home/Navbar";
import ContactForm from "./ContactFrom";
import Footer from "../Home/Footer";

const Contact = () => {
  return (
    <div className="bg-[#1E2939]">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
