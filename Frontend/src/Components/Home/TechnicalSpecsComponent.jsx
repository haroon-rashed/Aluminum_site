import React from "react";

const TechnicalSpecsComponent = () => {
  return (
    <div className="w-ful bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-6 bg-black text-white">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://blackbadgedoors.com/cdn/shop/files/black-badge-section_views.jpg?v=1695353138&width=880"
            alt="Cross section views"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 text-center">
          <h2 className="text-lg font-semibold mb-4">
            LOOKING FOR THE TECHNICAL SPECS?
          </h2>
          <h3 className="text-2xl font-bold mb-6">CONTACT US</h3>
          <p className="mb-4">
            All Black Badge doors & windows vary depending on the climate zone
            and use demand. Steel profiles range from hollow frames to solid
            steel thermal breaks and complex aluminum designs.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition duration-300"
          >
            REQUEST TECHNICAL SPECS
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecsComponent;
