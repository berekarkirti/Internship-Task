import React from "react";
import { FaShareAlt } from "react-icons/fa";
import TeamData from "../data/TeamData";

const InvestigatorSection = () => {
  return (
    <section className="text-center py-14  bg-gray-50">
      <h3 className="text-primary text-lg tracking-wider uppercase font-semibold mb-4">Investigator</h3>
      <h2 className="text-4xl font-bold text-gray-800 my-4 mb-14 tracking-wider">Our Dedicated Investigators</h2>
      <div className="flex justify-center gap-11 flex-wrap">
        {TeamData.map((member) => (
          <div
            key={member.id}
            className="overflow-hidden h-[600px] w-[400px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className=" w-full h-300 object-cover transform hover:scale-105 transition duration-300 "
            />
            <div className="absolute -mt-28 ml-44 z-40">
              <button className="bg-primary p-6 rounded-full text-white transition">
                <FaShareAlt />
              </button>
            </div>
            <div className="absolute bg-white p-7 w-[300px] -mt-20 ml-12 shadow-xl z-0">
            
            <div className="mt-2">
              <h3 className="text-3xl font-semibold text-gray-800 hover:text-primary transition-all ease-in-out duration-500 cursor-pointer mb-4">{member.name}</h3>
              <p className="text-primary text-xl">{member.role}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestigatorSection;
