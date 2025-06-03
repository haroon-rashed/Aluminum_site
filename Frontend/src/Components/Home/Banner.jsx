import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://blackbadgedoors.com/cdn/shop/files/black_badge_steel_windows_kitchen_fall.jpg?v=1696009060&width=1200')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold z-10">THE THINNEST FRAMES</h1>
      </div>
    </div>
  );
};

export default Banner;