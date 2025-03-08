import React from "react";
import AboutData from "../data/AboutData";
import Button from "../cva/button";

const AboutSection = () => {
  return (
    <section className="about-section py-16  bg-gray-50 px-52 mt-36 h-[900px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center ">

          {/* Image Column */}
          <div className="w-full md:w-1/2 p-4 ">
            <div className="relative">
              {/* Background Images */}
              <div className="-z-10">
                {AboutData.images.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="w-full object-cover"
                  />
                ))}
              </div>

              {/* Foreground Image */}
              <div className="absolute p-6 shadow-xl -mt-40 -ml-20 z-50 bg-white">
                <img
                  src="src/assets/About-2.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 p-3">
            <div className="pl-6">
              
              {/* Title Section */}
              <div className="mb-6">
                <span className="text-primary font-bold text-lg uppercase">
                  {AboutData.subTitle}
                </span>
                <h2 className="text-4xl font-bold leading-tight text-gray-800">
                  {AboutData.title}
                </h2>
              </div>

              {/* Description */}
              <div className="mb-6 text-gray-600 text-xl">
                <p>{AboutData.description}</p>
              </div>

              {/* List Items */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {AboutData.listItems.map((list, colIndex) => (
                  <ul key={colIndex} className="space-y-2 text-dark font-semibold">
                    {list.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <span className="text-primary">
                          <i className="fas fa-check-circle border-pink-700">
                            <img src="src/assets/check .png" alt="" className="w-5 h-5" />
                          </i>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              {/* Button */}
              <div className="w-48">
                <Button
                  as="a"
                  href="/"
                  variant="gradient"
                  size="md"
                  className="space-x-4"
                >
                  {AboutData.buttonText}
                  <i className="fas fa-arrow-right"></i>
                </Button>
              </div>

            </div>
          </div>
                
        </div>
      </div>
    </section>

  );
};

export default AboutSection;

