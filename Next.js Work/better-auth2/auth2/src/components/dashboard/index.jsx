"use client";
import React from "react";

const Dashboard = () => {
  const cardData = [
    { id: 1, title: "Card 1", description: "Lorem ipsum dolor sit amet.", category: "Electronics", price: "$299" },
    { id: 2, title: "Card 2", description: "Lorem ipsum dolor sit amet.", category: "Home Appliances", price: "$499" },
    { id: 3, title: "Card 3", description: "Lorem ipsum dolor sit amet.", category: "Books", price: "$19" },
    { id: 4, title: "Card 4", description: "Lorem ipsum dolor sit amet.", category: "Fashion", price: "$89" },
    { id: 5, title: "Card 5", description: "Lorem ipsum dolor sit amet.", category: "Accessories", price: "$59" },
    { id: 6, title: "Card 6", description: "Lorem ipsum dolor sit amet.", category: "Gaming", price: "$399" },
    { id: 7, title: "Card 7", description: "Lorem ipsum dolor sit amet.", category: "Furniture", price: "$799" },
    { id: 8, title: "Card 8", description: "Lorem ipsum dolor sit amet.", category: "Toys", price: "$29" },
    { id: 9, title: "Card 9", description: "Lorem ipsum dolor sit amet.", category: "Kitchenware", price: "$49" },
    { id: 10, title: "Card 10", description: "Lorem ipsum dolor sit amet.", category: "Sports", price: "$109" },
    { id: 11, title: "Card 11", description: "Lorem ipsum dolor sit amet.", category: "Beauty", price: "$39" },
    { id: 12, title: "Card 12", description: "Lorem ipsum dolor sit amet.", category: "Health", price: "$69" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-600">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardData.map((item) => (
          <div key={item.id} className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-500 mb-2">{item.description}</p>
            <p className="text-md text-teal-600 mb-2">{item.category}</p>
            <p className="text-lg font-bold text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
