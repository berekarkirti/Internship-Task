"use client";

import { useState } from "react";

const SetailsArea = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="py-10 mx-auto">
      <div className="px-3">
            <div className="tpproduct-details__navtab mb-14 ">
              <div className="tpproduct-details__nav mb-8">
                <ul className="nav nav-tabs pro-details-nav-btn flex gap-4 " role="tablist">
                  <li className="nav-item ">
                    <button
                      className={`nav-links ${activeTab === "description" ? "active" : ""}`}
                      onClick={() => setActiveTab("description")}
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-links ${activeTab === "info" ? "active" : ""}`}
                      onClick={() => setActiveTab("info")}
                    >
                      Additional information
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-links ${activeTab === "reviews" ? "active" : ""}`}
                      onClick={() => setActiveTab("reviews")}
                    >
                      Reviews (2)
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content tp-content-tab" id="myTabContent-2">
                {activeTab === "description" && (
                  <div className="tab-pane fade">
                    <p className="mb-6">
                      In marketing, a product is an object or system made available for consumer use...
                    </p>
                  </div>
                )}
                {activeTab === "info" && (
                  <div className="tab-pane fade">
                    <div className="product__details-info overflow-x-auto">
                      <table className="table-auto w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr className="border border-gray-300"><td className="p-2">Weight</td><td className="p-2">2 lbs</td></tr>
                          <tr className="border border-gray-300"><td className="p-2">Dimensions</td><td className="p-2">12 × 16 × 19 in</td></tr>
                          <tr className="border border-gray-300"><td className="p-2">Product</td><td className="p-2">Purchase this product on rag-bone.com</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="tab-pane fade show active">
                    <div className="product-details-review">
                      <h3 className="tp-comments-title mb-8">3 reviews for “Wide Cotton Tunic extreme hammer”</h3>
                      <div className="latest-comments mb-14">
                        <ul>
                          {["Siarhei Dzenisenka", "Tommy Jarvis", "Johnny Cash"].map((name, index) => (
                            <li key={index} className="mb-4">
                              <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                                <div>
                                  <b>{name}</b>
                                  <p className="text-sm">March 27, 2018 9:51 am</p>
                                  <p className="m-0">This cardigan is a comfortable warm classic piece...</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="product-details-comment">
                        <h3 className="mb-4">Add a review</h3>
                        <form>
                          <textarea placeholder="Your review..." className="w-full border p-2 mb-4"></textarea>
                          <input placeholder="Your Name*" type="text" className="w-full border p-2 mb-4" />
                          <input placeholder="Your Email*" type="email" className="w-full border p-2 mb-4" />
                          <button type="submit" className="tp-btn pro-submit bg-teal-500 text-white px-4 py-2">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
       
    </div>
  );
};

export default SetailsArea;
