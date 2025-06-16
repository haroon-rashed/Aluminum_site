import React from "react";

const steelDoors = [
  {
    title: "STEEL FRENCH DOORS W/ SIDELITES",
    price: "FROM $5,499.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/products/WindowV2_1.jpg?v=1680366073&width=500",
  },
  {
    title: "STEEL BIFOLD DOORS - CUSTOM MULTIFOLD PANELS",
    price: "$9,999.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/files/bifold-steel-doors.jpg?v=1730288575&width=500",
  },
  {
    title: "STEEL SLIDING DOORS",
    price: "FROM $3,999.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/files/customsteelslidingdoors.jpg?v=1722372266&width=500",
  },
  {
    title: "STEEL PIVOT DOOR",
    price: "$5,999.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/files/glasspivotdoor.jpg?v=1688095204&width=500",
  },
  {
    title: "STEEL DOUBLE DOOR W/ GRIDS",
    price: "$4,499.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/products/WindowV1_1.jpg?v=1680398081&width=500",
  },
  {
    title: "MODERN BLACK GRID WINDOWS",
    price: "$6,299.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/products/WindowsDoorsV1_1.jpg?v=1680918592&width=500",
  },
  {
    title: "BLACK PANEL WINDOW DOORS",
    price: "FROM $6,899.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/products/WindowsDoorsV2_5_e5b04a4d-3bf5-47ee-b81e-1be04b984edb.jpg?v=1680920973&width=1200",
  },
  {
    title: "VINTAGE MODERN GRID DOORS",
    price: "$4,799.00",
    image:
      "https://blackbadgedoors.com/cdn/shop/products/WindowsDoorsV8.1_1.jpg?v=1680799023&width=500",
  },
];

const SteelDoors = () => {
  return (
    <div className="relative px-4 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steelDoors.map((door, index) => (
          <div key={index} className="text-center">
            <img
              src={door.image}
              alt={door.title}
              className="w-full h-64 object-contain mx-auto"
            />
            <h3 className="mt-4 text-sm font-medium text-gray-800 uppercase">
              {door.title}
            </h3>
            <p className="mt-1 text-lg font-semibold">{door.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-black text-white uppercase tracking-wide font-semibold hover:bg-gray-900 transition">
          View All Steel Doors
        </button>
      </div>

      {/* Fixed Message Icon (bottom right corner) */}
      <div className="fixed bottom-6 right-6 bg-black p-3 rounded-full shadow-lg hover:bg-gray-800 transition cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84L3 20l1.16-3.87A7.952 7.952 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SteelDoors;
