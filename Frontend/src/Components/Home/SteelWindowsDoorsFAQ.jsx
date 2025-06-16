import { useState } from "react";

const SteelWindowsDoorsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between solid steel and hollow steel?",
      answer:
        "Solid steel profiles are made from a single piece of steel throughout their cross-section, offering maximum strength and durability. Hollow steel profiles have empty spaces inside, making them lighter while still maintaining good structural integrity. The choice depends on your project's requirements for strength, weight, and thermal performance.",
    },
    {
      question: "Is aluminum similar to steel?",
      answer:
        "While both aluminum and steel are durable metals used in construction, they have key differences. Steel is stronger and more rigid, but heavier. Aluminum is lighter, more corrosion-resistant, and better for thermal efficiency. Steel offers a more industrial, substantial look, while aluminum provides a sleeker appearance.",
    },
    {
      question: "Is everything custom made to order?",
      answer:
        "Yes, all our steel windows and doors are custom made to order to ensure perfect fit and finish for your specific project requirements. We don't carry standard sizes as each architectural project has unique dimensions and design needs.",
    },
    {
      question: "How long does production and delivery typically take?",
      answer:
        "Production time typically ranges from 6-8 weeks after final measurements and design approval. Delivery time depends on your location but usually adds 1-2 weeks. Complex custom designs may require additional time. We'll provide a precise timeline when you place your order.",
    },
    {
      question: "What maintenance do steel windows require?",
      answer:
        "Our steel windows are powder-coated for durability and require minimal maintenance. We recommend cleaning with mild soap and water annually. Inspect seals and hardware periodically. In coastal areas, more frequent cleaning may be needed to prevent salt buildup.",
    },
    {
      question: "Can steel windows be energy efficient?",
      answer:
        "Absolutely. Modern steel windows can be highly energy efficient when paired with thermal breaks, insulated glass units (IGUs), and proper weatherstripping. We offer various glazing options to meet or exceed energy code requirements for your region.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest mb-2">
            INQUIRE FOR A CUSTOM QUOTE
          </p>
          <h2 className="text-4xl font-bold mb-4">STEEL WINDOWS & DOORS</h2>
          <h3 className="text-2xl font-semibold">FREQUENTLY ASKED QUESTIONS</h3>
          <p className="mt-2 text-gray-600">
            Learn more about different steel profiles and what's the best option
            for your project anywhere
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="mt-2 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SteelWindowsDoorsFAQ;
