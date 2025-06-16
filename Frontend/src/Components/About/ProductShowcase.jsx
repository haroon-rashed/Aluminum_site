import React from "react";

const ProductShowcase = () => {
  return (
    <div className="bg-black pt-[70px]">
      <div className="bg-white w-full p-10">
        <h5 className="pt-[50px] pb-[10px] text-4xl text-center ">
          BLACK BADGE DOORS
        </h5>
        <p className="text-center">founded by Abu Hurara</p>
      </div>
      <hr className="h-[1px] bg-gray-300 w-full" />
      <div className="max-w-7xl mx-auto flex p-10 flex-col md:flex-row items-center bg-white">
        {/* Left side - Content */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Steel", "Aluminum", "Wood", "MORE!"].map((item) => (
              <span
                key={item}
                className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-800"
              >
                {item}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SPECIALTY STEEL METAL WINDOWS & DOORS
          </h2>

          <p className="text-gray-700 mb-8">
            We manufacture steel windows and doors and sell directly from our
            factory, eliminating middlemen and distributors to bring you
            significant savings! Our specialty is beautiful black steel frames,
            and we can custom-make any window or door to your specifications
            with a wide variety of hardware options. Here's a short list of what
            we offer:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Steel Windows:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Fixed / Picture Windows",
                  "Crank Casement Windows",
                  "Push out Casement Windows",
                  "Awning Windows",
                  "Sliding Windows (also available in aluminum)",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Steel Doors:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Swing Entry Doors",
                  "French Doors",
                  "Arch Doors",
                  "Dutch Doors",
                  "Double Doors",
                  "Sliding Doors",
                  "Bi-fold Doors",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Options:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Aluminum Windows",
                "Aluminum Sliding Doors",
                "Hurricane Proof Doors",
                "Hurricane Proof Windows",
                "Pivot Doors (available in Wood, Metal, and Glass)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            INQUIRE NOW
          </button>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 h-full">
          <img
            src="https://blackbadgedoors.com/cdn/shop/files/1_46059b91-9084-49ca-9d42-6c32e52a6fa2.jpg?v=1687827124&width=800"
            alt="Steel windows and doors"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
