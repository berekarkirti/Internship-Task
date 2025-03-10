import React from "react";
import FunfactData from "../data/FunFactData";

const Funfact = () => {
  return (
    <section className="absolute funfact-section ml-52 py-10 -mt-32">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {FunfactData.map((fact) => (
            <div
              key={fact.id}
              className="funfact-block-one bg-white p-14 shadow-xl flex items-center gap-14 "
            >
              {/* Icon Section */}
              <div className="icon-box bg-red-100 rounded-full p-8 flex justify-center items-center mr-4">
                <i className={`${fact.icon} text-red-500 text-3xl`}>{fact.icon}</i>
              </div>
              {/* Content Section */}
              <div>
                <div className="count-outer text-5xl font-bold text-dark">
                  <span>{fact.count}</span>
                  <span className="ml-1">{fact.suffix}</span>
                </div>
                <h3 className="mt-1 text-2xl font-medium text-dark">{fact.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funfact;
