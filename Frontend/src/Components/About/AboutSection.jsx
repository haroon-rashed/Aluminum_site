import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-7xl p-10   mx-auto flex flex-col md:flex-row items-center bg-white">
        {/* Left side - Content */}
        <div className="md:w-1/2 p-8 md:p-12 order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Jennifer Yanyuk
          </h3>

          <p className="text-2xl font-bold text-gray-900 mb-8">
            Welcome to Black Badge Doors!
          </p>

          <div className="space-y-6 text-gray-700 mb-8">
            <p>
              Founded by Jennifer Yanyuk, a passionate interior designer and
              mother of two, our story began with a quest for the perfect doors
              and windows for her family's farmhouse project. Frustrated by the
              lack of availability and transparency in pricing, Jennifer decided
              to take matters into her own hands and create a solution.
            </p>

            <p>
              With a keen eye for design and a commitment to quality, Jennifer
              established Black Badge Doors to bring exquisite, modern steel
              doors and windows to homeowners and businesses across the United
              States. From the sun-kissed coast of California to the bustling
              streets of New York City, and from the comfort of your own home,
              our online ordering system makes it easy to find the perfect fit
              for your space.
            </p>

            <p>
              As an interior designer and homeowner herself, Jennifer
              understands the importance of balancing style, functionality, and
              durability. Our black frame, sleek, and modern steel doors and
              windows are carefully crafted to meet the highest standards,
              ensuring a perfect blend of form and function.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 h-full p-5">
          <img
            src="https://blackbadgedoors.com/cdn/shop/files/D667010D-164D-44B4-BA68-A05055720B57.jpg?v=1678588417&width=800"
            alt="Jennifer Yanyuk"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <hr className="h-[1px]  w-full bg-gray-400 border border-none" />
      <h5 className="text-3xl bg-white p-[100px] text-center">
        “I DISCOVERED THAT SOMETIMES YOU HAVE TO DO IT YOURSELF TO ACHIEVE WHAT
        YOU'VE IMAGINED”
      </h5>
      <hr className="h-[1px]  w-full bg-gray-400 border border-none" />
    </div>
  );
};

export default AboutSection;
