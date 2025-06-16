import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaGlobe,
  FaRegFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t p-4">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">In The News</a>
            </li>
            <li>
              <a href="#">Marvin Replacement (Infinity)</a>
            </li>
            <li>
              <a href="#">TruStile</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">For Professionals</a>
            </li>
            <li>
              <a href="#">Identify My Product</a>
            </li>
            <li>
              <a href="#">Replacement Parts</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Technical Specifications</a>
            </li>
            <li>
              <a href="#">Care and Maintenance</a>
            </li>
            <li>
              <a href="#">Warranties</a>
            </li>
            <li>
              <a href="#">Owner's Manuals</a>
            </li>
            <li>
              <a href="#">Glossary of Terms</a>
            </li>
            <li>
              <a href="#">Energy Efficiency</a>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Find a Dealer</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe />
            <span>International Dealers</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegFileAlt />
            <span>Product Literature</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>Email Sign Up</span>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-xs text-gray-600">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <FaFacebookF className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaPinterestP className="text-xl" />
          <FaYoutube className="text-xl" />
          <FaLinkedinIn className="text-xl" />
        </div>
        <div className="flex space-x-4">
          <a href="#">Privacy Statement</a>
          <a href="#">Terms of Use</a>
          <a href="#">California Users/Privacy</a>
          <span>© 2025 Marvin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
