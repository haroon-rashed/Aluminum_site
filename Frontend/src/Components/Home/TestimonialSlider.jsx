import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const slides = [
  {
    quote:
      "Aluminum windows blend strength and style. They resist rust and allow for slim frames with wide glass views.",
    author: "Alex Morgan, Window Architect",
    link: "View the Panorama Project",
  },
  {
    quote:
      "Whether it's winter winds or summer sun, aluminum windows stand firm without warping or fading.",
    author: "Jamie Fields, Exterior Designer",
    link: "View the Horizon House Project",
  },
  {
    quote:
      "Designing with aluminum gives unmatched flexibility—clean lines, sharp angles, and modern finishes.",
    author: "Taylor Reid, Lead Engineer",
    link: "View the Skyline Villa Project",
  },
  {
    quote:
      "With aluminum, energy efficiency meets durability. It’s the future of functional beauty.",
    author: "Riley Johnson, Product Innovator",
    link: "View the Eco Urban Project",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-gray-50 text-center py-20 px-4 relative">
      <div className="text-4xl text-gray-400 mb-6 flex justify-center">
        <FaQuoteLeft />
      </div>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        {slides[current].quote}
      </p>
      <p className="mt-6 font-semibold text-gray-900">
        {slides[current].author}
      </p>
      <p className="mt-4 text-sm font-semibold text-gray-800 underline-offset-4 hover:underline cursor-pointer inline-flex items-center gap-2">
        {slides[current].link} <FaArrowRight size={12} />
      </p>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="mt-8 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
