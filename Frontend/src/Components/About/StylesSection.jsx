import React from "react";

const StylesSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left side - Content */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Window & Door STYLES
          </h2>

          <div className="space-y-6 text-gray-700 mb-8">
            <p>
              While clean, thin black metal frames with all glass is the
              emphasis here at Black Badge, we are able to customize virtually
              any black frame window or door for you. Interior or exterior.
              Single pane or double pane glass. Residential or commercial, argon
              gas, insulated... you name it!
            </p>

            <p>
              Our design team is ready to make the metal door or window of your
              liking, bringing your dream project to life! With minimalistic
              designs and maximum sun exposure for daylight entering into your
              home, building or space, Black Badge is the sure style to last
              forever.
            </p>

            <p>
              With so many options out there, choose the one made of metal - an
              element that's been around since the beginning of time.
            </p>
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            SHOP WINDOWS & DOORS
          </button>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 h-full">
          <img
            src="https://blackbadgedoors.com/cdn/shop/files/V_7.0_-_008.png?v=1683724629&width=800"
            alt="Window and door styles"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StylesSection;
