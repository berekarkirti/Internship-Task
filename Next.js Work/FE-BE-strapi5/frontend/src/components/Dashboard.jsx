import React from "react";
import Layout from "../components/Layout";

const dashboardData = 
{
  totalStock: 150,
  totalProducts: 25,
  totalCategories: 5,
};

const Dashboard = () => 
{
  return (
    <Layout>
      <div className="p-6 rounded-lg mx-auto min-h-[calc(100vh-12rem)] flex flex-col justify-between bg-gradient-to-br from-gray-50 to-white text-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3 drop-shadow-md">Dashboard Overview</h1>
          <p className="text-lg text-gray-600">Your key statistics at a glance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 h-[180px] rounded-xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Total Stock</h2>
            <p className="text-5xl font-extrabold text-blue-700">{dashboardData.totalStock}</p>
          </div>
          <div className="bg-blue-50 p-6 h-[180px] rounded-xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Total Products</h2>
            <p className="text-5xl font-extrabold text-blue-700">{dashboardData.totalProducts}</p>
          </div>
          <div className="bg-blue-50 p-6 h-[180px] rounded-xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Total Categories</h2>
            <p className="text-5xl font-extrabold text-blue-700">{dashboardData.totalCategories}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-base text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;