import React from "react";

const PictureWindowComponent = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-6 bg-white">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://blackbadgedoors.com/cdn/shop/files/interior_black_badge_doors_and_windows_fireplace.jpg?v=1680520675&width=800"
            alt="Interior with picture windows"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 text-gray-800 text-left">
          <h2 className="text-2xl font-bold mb-2">ALUMINUM OR STEEL</h2>
          <h3 className="text-xl font-semibold mb-4">PICTURE WINDOWS</h3>
          <p className="mb-4">
            Limitless options when it comes to your dream steel metal picture
            windows. Modern think black frames with slim dividers and glass in
            any size and style! Beautiful fixed windows that are bound to make a
            statement. Double pane or triple glazed tempered glass. Thermal
            break optional.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            SHOP PICTURE WINDOWS
          </a>
        </div>
      </div>
    </div>
  );
};

export default PictureWindowComponent;
