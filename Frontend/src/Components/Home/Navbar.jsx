import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isActive = isScrolled || isHovered;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SHOP", path: "/shop" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
    { name: "CUSTOM ORDER", path: "/custom-order" },
    { name: "ACCOUNT", path: "/account" },
    { name: "SEARCH", path: "/search" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isActive ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`font-bold text-xl ${
            isActive ? "text-black" : "text-white"
          }`}
        >
          BLACK BADGE
        </div>

        {/* Links */}
        <div
          className={`flex space-x-6 ${isActive ? "text-black" : "text-white"}`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-gray-500 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Button */}
        <button
          className={`rounded-full px-3 py-2 border transition-colors duration-200 ${
            isActive
              ? "bg-black text-white hover:bg-white hover:text-black border-black"
              : "bg-white text-black hover:bg-black hover:text-white border-white"
          }`}
        >
          Add a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;





