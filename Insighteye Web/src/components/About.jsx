import React from "react";
import AboutData from "../data/AboutData";
import Button from "../cva/button";

const AboutSection = () => {
  return (
    <section className="about-section px-52 mt-52 h-[900px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center ">

          {/* Image Column */}
          <div className="w-full md:w-1/2 p-4 ">
            <div className="relative">
              {/* Background Images */}
              <div className="-z-10 ml-20">
                {AboutData.images.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="w-[510px] h-[590px] object-cover"
                  />
                ))}
              </div>

              {/* Foreground Image */}
              <div className="absolute p-6 shadow-xl -mt-40 ml-10-50 bg-white">
                <img
                  src="src/assets/About-2.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:w-1/2 px-10">
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
              <div className="mb-16 text-gray-600 text-xl">
                <p>{AboutData.description}</p>
              </div>

              {/* List Items */}
              <div className="grid grid-cols-2 gap-4 mb-20 ">
                <div className="absolute -mt-8 -ml-2 shadow-sm">
                   <img src="src/assets/About.png" alt="" />
                </div>

         
                {AboutData.listItems.map((list, colIndex) => (
                  <ul key={colIndex} className="space-y-2 px-5 text-dark font-semibold">
                    {list.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-lg "
                      >
                        <span className="text-primary mb-2">
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
                  size="lg"
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

