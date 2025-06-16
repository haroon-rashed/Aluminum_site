import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...files] }));
  };

  return (
    <div className="relative">
      {/* Dark Navbar (60px height) */}
      <div className="h-[70px] bg-gray-900 w-full fixed top-0 left-0 z-10">
        {/* Navbar content would go here */}
      </div>

      {/* Main Content (starts below navbar) */}
      <div className="pt-[60px] bg-white w-full">
        <div className="max-w-4xl mx-auto px-4 py-12 bg-white">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2">
              CAR RECOGN TO TEAM IS READY TO GET TO WORK
            </h1>
            <h2 className="text-2xl font-semibold mb-6">CONTACT US</h2>

            <div className="space-y-2 mb-8">
              <p className="text-lg">info@blackbadgedoors.com</p>
              <p className="text-lg">CALL OR TEXT: 877-222-2657</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-1">Name</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none"
                  />
                </div>

                <div>
                  <p className="mb-1">E-mail</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <p className="mb-1">Phone #</p>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none"
                />
              </div>

              <div>
                <p className="mb-2">Attach plans or images</p>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="mb-2">
                    <label className="flex items-center cursor-pointer">
                      <span className="text-sm">Choose file</span>
                      <span className="ml-2 text-sm text-gray-500">
                        | No file chosen
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-1">Message</p>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none resize-none"
                ></textarea>
              </div>
            </form>
            <button className="bg-black text-center py-3 w-full my-3 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
