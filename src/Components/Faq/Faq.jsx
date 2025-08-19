import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "What is Amrutam?", a: "Amrutam is a holistic health platform focused on Ayurveda and natural healing." },
    { q: "How does Amrutam help me grow as a practitioner?", a: "By connecting you with patients, providing tools, and enabling tele-consultations." },
    { q: "How do I become a part of Amrutam Doctor?", a: "Simply sign up, complete your KYC, and start offering consultations." },
    { q: "What is Amrutam Global as a platform?", a: "It is Amrutam’s initiative to bring Ayurveda practitioners and patients together worldwide." },
    { q: "What documents do I need to provide?", a: "You’ll need to upload your medical degree, registration proof, and ID documents for verification." },
    { q: "Is there a fee to join Amrutam?", a: "No, joining Amrutam as a practitioner is free of cost." },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-[#FFF8E6] py-16 px-6">

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3A643C]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Find quick answers to common questions to help you navigate the app and its features easily.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b-1 bg-[#FFF8E6] overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-[#3A643C] font-medium cursor-pointer"
            >
              {item.q}
              {openIndex === i ? (
                <ChevronUp size={18} className="text-[#3A643C]" />
              ) : (
                <ChevronDown size={18} className="text-[#3A643C]" />
              )}
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-700 text-sm">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <button className="bg-[#3A643C] text-white px-6 py-2 rounded-lg font-medium hover:bg-green-900 transition">
          See More
        </button>
      </div>
    </div>
  );
}
