import React from "react";
import TestimonialData from "../data/TestimonialData";

const Testimonial = () => {
  return (
    <section className="py-48 bg-gray-50">
      <div className="container mx-auto px-24">
        <h2 className="text-lg font-semibold text-primary uppercase mb-4 tracking-widest mx-8">
          Testimonials
        </h2>
        <div className="flex  items-center ">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="pr-16">
              <div className="space-y-6">
                {TestimonialData.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6"
                  >
                    <p className="text-gray-700  mb-4 text-3xl">“{testimonial.text}”</p>
                    <ul className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <li key={i} className="text-yellow-500 text-2xl">
                          ★
                        </li>
                      ))}
                      
                      {testimonial.rating < 5 && (
                        <li className="text-gray-300">★</li>
                      )}
                     
                    </ul>
                    <hr className="mt-16"/>
                    <div className="flex items-center mt-10">
                      <div className="w-20 h-20 rounded-full overflow-hidden border">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-medium text-gray-800">
                          {testimonial.author}
                        </h3>
                        <span className="text-xl text-gray-400">
                          {testimonial.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full  lg:w-1/2 ml-24">
            <div className="relative">
              <div className="absolute inset-0 mt-11 ml-20 h-[370px] w-[500px] bg-orange-100"></div>
              <div className="relative">
                <img
                  src="src/assets/testimonial.jpg"
                  alt="Testimonial Illustration"
                  className=" shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
