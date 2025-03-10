import React from 'react';
import CtaData from '../data/CtaData'

const Cta = () => {
  return (
    <section>
      {CtaData.map((banner) => (
        <div
          key={banner.id}
          className={`relative bg-gradient-to-r from-${banner.gradientFrom} to-${banner.gradientTo} h-[400px] flex items-center px-56`}
        >
          <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute -mt-[290px] w-auto max-h-[600px] object-cover"
              />
            </div>

            {/* Right Side (Text Content) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                {banner.title}
              </h1>
              <button className="mt-6 px-8 py-4 text-lg bg-black text-white shadow-lg hover:bg-white hover:text-black transition-all ease-in-out duration-700 ">
                {banner.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Cta;
