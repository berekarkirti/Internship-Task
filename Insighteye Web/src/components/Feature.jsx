import React from "react";
import FeaturesData from "../data/FeatureData";
import { FaAnchorCircleCheck } from "react-icons/fa6";

const Feature = () => {
  return (
    <section className="absolute z-10 shadow-lg px-10 py-8 bg-secondary -mt-24 mx-44 h-60 w-[1400px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {FeaturesData.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-100  p-11 flex items-center gap-8"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <i className={`${feature.iconClass} text-primary text-4xl `}>{feature.iconClass}</i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
