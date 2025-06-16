import React from "react";

const FixedImage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://blackbadgedoors.com/cdn/shop/files/steel_windows_and_doors_in_Canada.jpg?v=1730858223&width=1800')",
        }}
      ></div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-90 p-8 text-center shadow-lg">
          <h1 className="text-lg font-semibold text-black leading-snug">
            BUILD YOUR HOME WITH <br />
            DESIGNER SWISS STEEL <br />
            WINDOWS & DOORS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FixedImage;
