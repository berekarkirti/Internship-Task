import React from 'react';
import Button from '../cva/button';


const Chooseus = () => {

  const reasons = [
    { id: 1, icon: 'src/assets/Chooseus-1.svg', title: 'Expert Investigator Agents' },
    { id: 2, icon: 'src/assets/Chooseus-2.svg', title: 'Expert Investigator Agents', className: 'mt-10' },
    { id: 3, icon: 'src/assets/Chooseus-3.svg', title: 'Expert Investigator Agents' },
  ];


  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-24">

          {/* Left Content */}
          <div className="md:w-1/2 text-left md:text-24">
            <span className="text-primary text-lg font-semibold uppercase">Why Choose</span>
            <h2 className="text-2xl md:text-5xl font-bold mt-4">
              Several Reasons why You Choose a Private Investigator.
            </h2>
            <p className="text-gray-500 mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia id in. Quisque porttitor tortor
              blandit nunc sed ac id. Mattis in nunc libero viverra. Consectetur leo nibh amet.
            </p>
            <Button
              as="a"
              href="/"
              variant="gradient"
              size="lg"
              className="space-x-4 mt-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Right Content */}
          <div className="flex justify-between items-center gap-6">
            <div className=" mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-1 gap-6">

              <div className="bg-white shadow-xl px-4 py-20 flex flex-col items-center text-center transition transform hover:scale-105">
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-pink-100 rounded-full">
                  <img src="src/assets/Chooseus-1.svg" alt="Expert Investigator Agents" className="w-10 h-10" />
                </div>
                <h3 className="text-[18px]  font-extrabold text-gray-700">Expert Investigator Agents</h3>
              </div>

              <div className="bg-white shadow-xl px-4 py-20 flex flex-col items-center text-center transition transform hover:scale-105">
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-pink-100 rounded-full">
                  <img src="src/assets/Chooseus-3.svg" alt="Expert Investigator Agents" className="w-10 h-10" />
                </div>
                <h3 className="text-[18px]  font-extrabold text-gray-700">Expert Investigator Agents</h3>
              </div>

            </div>

            <div className=" mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="bg-white shadow-xl px-4 py-20 flex flex-col items-center text-center transition transform hover:scale-105 mt-4">
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-pink-100 rounded-full">
                  <img src="src/assets/Chooseus-2.svg" alt="Expert Investigator Agents" className="w-10 h-10" />
                </div>
                <h3 className="text-[18px]  font-extrabold text-gray-700">Expert Investigator Agents</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
