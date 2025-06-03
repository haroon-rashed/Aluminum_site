import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">BLACK BADGE</div>
        <div className="flex space-x-6 text-white">
          <a href="#" className="hover:text-gray-300">HOME</a>
          <a href="#" className="hover:text-gray-300">ABOUT</a>
          <a href="#" className="hover:text-gray-300">SHOP</a>
          <a href="#" className="hover:text-gray-300">PROJECTS</a>
          <a href="#" className="hover:text-gray-300">CONTACT</a>
          <a href="#" className="hover:text-gray-300">CUSTOM ORDER</a>
          <a href="#" className="hover:text-gray-300">COMMERCIAL</a>
          <a href="#" className="hover:text-gray-300">ACCOUNT</a>
          <a href="#" className="hover:text-gray-300">SEARCH</a>
        </div>
        <button className="rounded-full px-3 py-2 bg-black text-white hover:bg-white hover:text-black">Add  a Qoute</button>
      </div>
    </nav>
  );
};

export default Navbar;