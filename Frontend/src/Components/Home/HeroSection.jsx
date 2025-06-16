import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center px-4 py-20 bg-white">
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
        Windows and doors custom crafted for <br className="hidden sm:block" />
        your vision
      </h1>
      <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
        At Marvin, we help turn visions into reality. That’s why we take
        exceptional care to deliver the highest quality windows and doors that
        turn every exceptional detail into dreams come true.
      </p>
    </section>
  );
};

export default HeroSection;
