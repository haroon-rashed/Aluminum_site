import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./globals.css";
import LoginPage from "./Components/Authentication/Login";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
