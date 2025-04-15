"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import axios from "axios";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:1337/api/products?populate=*");
                setProducts(response.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch products");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="text-center p-6">Loading...</div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="text-center p-6 text-red-600">{error}</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-800 drop-shadow-md">Product Management</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                        + Add Product
                    </button>
                </div>
                <div className="mb-6 flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="border border-gray-300 p-2 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Categories</option>
                        {[...new Set(products.map(product => product.category?.Name))].map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Prices</option>
                    </select>
                    <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Stock</option>
                    </select>
                </div>
                <table className="w-full text-left bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">
                                <input type="checkbox" className="accent-blue-600" />
                            </th>
                            <th className="p-3 text-gray-700 font-semibold">IMAGES</th>
                            <th className="p-3 text-gray-700 font-semibold">ID</th>
                            <th className="p-3 text-gray-700 font-semibold">NAME</th>
                            <th className="p-3 text-gray-700 font-semibold">PRICE</th>
                            <th className="p-3 text-gray-700 font-semibold">STOCK</th>
                            <th className="p-3 text-gray-700 font-semibold">CATEGORY</th>
                            <th className="p-3 text-gray-700 font-semibold">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b hover:bg-gray-50 transition duration-200">
                                <td className="p-3">
                                    <input type="checkbox" className="accent-blue-600" />
                                </td>
                                <td className="p-3">
                                    {product.Image && product.Image.length > 0 ? (
                                        <div className="flex space-x-2">
                                            {product.Image.map((img, index) => (

                                                <Image
                                                    key={index}
                                                    src={`http://localhost:1337${img.url}`}
                                                    alt={`${product.Name} ${index + 1}`}
                                                    width={50}
                                                    height={40}
                                                    className="product-image rounded-full"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                                            No Image
                                        </div>
                                    )}
                                </td>
                                <td className="p-3 text-gray-800">{product.id}</td>
                                <td className="p-3 text-gray-800">{product.Name}</td>
                                <td className="p-3 text-gray-800">${product.Price.toFixed(2)}</td>
                                <td className="p-3 text-gray-800">{product.Stock}</td>
                                <td className="p-3 text-gray-800">{product.category?.Name || "N/A"}</td>
                                <td className="p-3 flex space-x-4">
                                    <button className="text-blue-600 hover:text-blue-800 transition duration-200">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </button>
                                    <button className="text-red-600 hover:text-red-800 transition duration-200">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Product;