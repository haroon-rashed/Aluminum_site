import React from "react";

const AboutFixedImage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div
        className="fixed top-[100px] left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://blackbadgedoors.com/cdn/shop/files/273779773_366608928275100_8934201143668286624_n.jpg?v=1683460881&width=1000')",
        }}
      ></div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-90 p-8 text-center shadow-lg">
          <h1 className="text-lg font-semibold text-black leading-snug">
            ALWAYS DISCOVERING
            <br />
            Learning, getting inspired <br />
            and doing. Black Badge <br />
            Doors is just the beginning.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutFixedImage;
