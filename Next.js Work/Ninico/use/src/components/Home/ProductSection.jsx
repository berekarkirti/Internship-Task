
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBasket, FaExchangeAlt, FaEye, FaHeart } from "react-icons/fa";
import products from "@/data/products";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("all");
 

  const filteredProducts = () => {
    switch (activeTab) {
      case "popular":
        return products.filter((product) => product.isPopular);
      case "onSale":
        return products.filter((product) => product.isOnSale);
      case "bestRated":
        return products.filter((product) => product.rating >= 4);
      case "all":
      default:
        return products;
    }
  };

  return (
    <section className="pt-[45px] pb-[30px]">
      <div className="p-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="w-full mb-10 text-left">
            <h4 className="text-3xl font-bold">
              Popular <span className="text-[var(--color-quick)] font-light">Products</span>
            </h4>
          </div>
          <div className="md:w-1/2 w-full">
            <nav className="flex justify-end">
              <div className="flex space-x-4" role="tablist">
                <button
                  className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-[var(--color-quick)] underline" : "text-black"}`}
                  onClick={() => setActiveTab("all")}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 font-medium ${activeTab === "popular" ? "text-[var(--color-quick)] underline" : "text-black"}`}
                  onClick={() => setActiveTab("popular")}
                >
                  Popular
                </button>
                <button
                  className={`px-4 py-2 font-medium ${activeTab === "onSale" ? "text-[var(--color-quick)] underline" : "text-black"}`}
                  onClick={() => setActiveTab("onSale")}
                >
                  On Sale
                </button>
                <button
                  className={`px-4 py-2 font-medium ${activeTab === "bestRated" ? "text-[var(--color-quick)] underline" : "text-black"}`}
                  onClick={() => setActiveTab("bestRated")}
                >
                  Best Rated
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts().map((product) => (
              <div
                key={product.id}
                className="group relative hover:bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-3 flex flex-col min-h-[400px]"
              >
                <div className="relative flex-shrink-0">
                  <Link href={`/shop/${product.id}`}>
                    <Image
                      src={product.img1}
                      alt={product.name}
                      width={350}
                      height={270}
                      className="w-full h-[300px] object-cover bg-"
                    />
                    <Image
                      src={product.img2}
                      alt={`${product.name} secondary`}
                      width={350}
                      height={270}
                      className="absolute top-0 left-0 w-full h-[300px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2 text-gray-500 bg-white rounded-lg p-2 shadow-md">
                      <button className="p-2 hover:text-gray-700 transition-colors duration-200">
                        <FaShoppingBasket className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:text-gray-700 transition-colors duration-200">
                        <FaExchangeAlt className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:text-gray-700 transition-colors duration-200">
                        <FaEye className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:text-gray-700 transition-colors duration-200">
                        <FaHeart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-4 flex-grow flex flex-col">
                  <h3 className="text-base font-semibold mb-1">
                    <Link href={`/shop/${product.id}`} className="text-[#999999] text-[16px] transition-colors duration-200">
                      
                      {product.name}
                    </Link>
                  </h3>
                  <div className="text-[15px] font-bold text-gray-900">{product.price}</div>
                  
                  <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full border border-blue-400"></span>
                      <span className="w-3 h-3 bg-red-500 rounded-full border border-red-600"></span>
                      <span className="w-3 h-3 bg-orange-500 rounded-full border border-orange-600"></span>
                      <span className="w-3 h-3 bg-purple-500 rounded-full border border-purple-600"></span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex text-red-500 text-[14px]">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span
                              key={i}
                              className={i < product.rating ? "text-red-500" : "text-gray-300"}
                            >
                              ★
                            </span>
                          ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-[12px]">({product.rating * 20})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;