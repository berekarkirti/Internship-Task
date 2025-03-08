import React, { useState, useEffect } from "react";
import BannerData from "../data/BannerData";
import Button from "../cva/button";

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-50">
      <div className="relative overflow-hidden w-full h-[700px]">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${BannerData.length * 100}%`,
          }}
        >
          {BannerData.map((banner) => (
            <div
              key={banner.id}
              className="relative w-full flex-shrink-0 h-[700px] object-contain"
              style={{
                backgroundImage: `url(${banner.bgImage})`,
              }}
            >
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 text-left max-w-[600px] lg:mx-52 text-white flex flex-col justify-center h-full">
                <h3 className="text-lg lg:text-2xl font-semibold uppercase mb-4">
                  {banner.heading}
                </h3>
                <h2 className="text-3xl lg:text-7xl font-extrabold tracking-wider mb-6">
                  {banner.subheading}
                </h2>
                <p className="text-sm lg:text-lg mb-8">{banner.description}</p>
                <div>
                  <div className="w-48">
                    <Button
                      as="a"
                      href="/"
                      variant="gradient"
                      size="md"
                      className="space-x-4"
                    >
                      {banner.buttonText}
                      <i className="fas fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Center Image */}
              <img
                src="src/assets/center.png"
                alt="center"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mx-[820px] z-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
