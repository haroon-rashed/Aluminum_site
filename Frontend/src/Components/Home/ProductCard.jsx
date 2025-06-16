import React from "react";

const products = [
  {
    title: "Ultimate",
    description:
      "Ultimate windows and doors feature wood interiors with the option of either wood or aluminum-clad exteriors.",
  },
  {
    title: "Coastline",
    description:
      "Abundant windows and doors and an innovative new design ensure this house on the beach benefits from majestic views.",
  },
  {
    title: "Modern",
    description:
      "Modern windows and doors are built with a high-density fiberglass exterior and a low-gloss aluminum interior.",
  },
];

const ProductCards = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Extruded Aluminum Window and Door Product Lines
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md border border-gray-200 group transition-all duration-300 relative"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-6">{item.description}</p>
            <div className="flex items-center font-semibold text-sm text-gray-800 hover:underline cursor-pointer">
              Learn More <span className="ml-2">→</span>
            </div>

            {/* Hover bottom border */}
            <div className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
