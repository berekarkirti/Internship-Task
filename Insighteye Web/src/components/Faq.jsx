import React, { useState } from "react";
import FaqData from "../data/FaqData";
import { FaPlus,FaMinus } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-center  bg-gray-100">
      {/* Image Section */}
      <div className="w-[400px] md:w-1/2">
        <img
          src="src\assets\FAQ.jpg"
          alt="FAQ"
          className=" object-cover w-full h-full"
        />
      </div>

      <div className="h-[550px] w-[50px] bg-orange-500 mt-36">

      </div>
      {/* FAQ Section */}
      <div className="w-full md:w-1/2 px-36">
        <h3 className="text-primary tracking-wider text-lg font-semibold uppercase mb-2">FAQ’s</h3>
        <h2 className="text-5xl font-bold text-gray-800 mb-24">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8 items-center justify-center ">
          {FaqData.map((faq, index) => (
            <div
              key={faq.id}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 bg-white text-xl text-gray-800 font-medium focus:outline-none"
              >
                <span>{faq.title}</span>
                <div className="mt-1 text- ">   
                  {activeIndex === index ? <FaMinus/> : <FaPlus />}
                </div>
              </button>
              {activeIndex === index && (
                <div className=" bg-white text-gray-600 text-xl p-6 ">{faq.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
