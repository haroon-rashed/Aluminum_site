import React from "react";

const RecentlyViewedProduct = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center w-full  max-w-2xl mx-auto py-10 px-6  text-center text-gray-800">
        <h2 className="text-xl font-semibold mb-6">RECENTLY VIEWED PRODUCTS</h2>
        <img
          src="https://blackbadgedoors.com/cdn/shop/products/WindowsDoorsV2_1.jpg?v=1680920973&width=500"
          alt="Steel Arch French Doors"
          className="w-100 h-auto my-4"
        />
        <p className="text-lg font-medium mb-2">STEEL ARCH FRENCH DOORS</p>
        <p className="text-gray-600">FROM $3,999.00</p>
      </div>
    </div>
  );
};

export default RecentlyViewedProduct;
