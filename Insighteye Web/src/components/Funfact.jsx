import React from "react";
import FunfactData from "../data/FunFactData";

const Funfact = () => {
  return (
    <section className="funfact-section py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FunfactData.map((fact) => (
            <div
              key={fact.id}
              className="funfact-block-one bg-white p-6 shadow-lg rounded-lg text-center"
            >
              <div className="icon-box mb-4">
                <div
                  className={`icon gradient-color text-4xl text-teal-500 ${fact.icon}`}
                ></div>
              </div>
              <div className="count-outer count-box text-3xl font-bold text-gray-800">
                <span className="count-text">{fact.count}</span>
                <span>{fact.suffix}</span>
              </div>
              <h3 className="mt-2 text-xl text-gray-600">{fact.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funfact;
