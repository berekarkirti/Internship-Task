'use client';

import React, { useState } from 'react';

const Converter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const setC = (e) => 
  {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? (value * 9) / 5 + 32 : "");
  };

  const setF = (e) => 
  {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? ((value - 32) * 5) / 9 : "");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-teal-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-teal-600 mb-4 text-center">Temperature Converter</h1>
        <div className="mb-6">
          <label htmlFor="celsius" className="block text-gray-700 font-semibold mb-2">Celsius (°C)</label>
          <input id="celsius" type="number" value={celsius} onChange={setC} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label htmlFor="fahrenheit" className="block text-gray-700 font-semibold mb-2">Fahrenheit (°F)</label>
          <input id="fahrenheit" type="number" value={fahrenheit} onChange={setF} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>
    </div>
  );
};

export default Converter;
