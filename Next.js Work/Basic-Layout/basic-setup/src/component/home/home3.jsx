// 'use client';

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { deleteProducts, editProducts, getProducts } from '@/redux-counter/curd/postthunk';

// const Home3 = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.items);
//   const status = useSelector((state) => state.products.status);
//   const error = useSelector((state) => state.products.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(getProducts());
//     }
//   }, [status, dispatch]);

//   const handleEdit = (id) => {
//     console.log(`Edit product with ID: ${id}`);
//     dispatch(editProducts())
//   };

//   const handleDelete = (id) => {
//     console.log(`Delete product with ID: ${id}`);
//     dispatch(deleteProducts(id))
//   };

//   if (status === 'loading') return <p className="text-center text-lg">Loading...</p>;
//   if (status === 'failed') return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div className="bg-teal-600 min-h-screen py-8 shadow-2xl">
//       <h2 className="text-2xl font-bold text-center text-white mb-6">Books List</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-4">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img
//               src={product.bookImage}
//               alt={product.Title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {product.Title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-2">
//                 Author: <span className="font-medium">{product.Author}</span>
//               </p>
//               <p className="text-sm text-gray-600 mb-2">
//                 Published: {product.PublishedDate}
//               </p>
//               <p className="text-sm text-gray-600 mb-2">
//                 ISBN: {product.ISBN}
//               </p>
//               <p className="text-sm text-gray-600 mb-2">
//                 Price: <span className="text-green-600 font-medium">${product.Price}</span>
//               </p>
//               <p className="text-sm text-gray-600 line-clamp-2 mb-4">
//                 {product.Description}
//               </p>
//               <div className="flex gap-2">
//                 <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg " onClick={() => handleEdit(product.id)}>
//                   Edit
//                 </button>
//                 <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg" onClick={() => handleDelete(product.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home3;


"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, editProducts, deleteProducts, addProducts  } from "@/redux-counter/curd/postthunk";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.product);
  const [newProduct, setNewProduct] = useState({
    title: "",
    author: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleCreate = () => {
    if (newProduct.title && newProduct.author && newProduct.price) {
      dispatch(addProducts(newProduct));
      setNewProduct({ title: "", author: "", price: "", image: "" });
    }
  };

  const handleEdit = (id) => {
    const updatedData = {
      title: "Updated Title",
      author: "Updated Author",
      price: "Updated Price",
      image: "Updated Image URL",
    };
    dispatch(editProducts({ id, data: updatedData }));
  };

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">
        Product List
      </h1>

      {/* Add Product Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h2>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
        />
        <input
          type="text"
          placeholder="Author"
          value={newProduct.author}
          onChange={(e) =>
            setNewProduct({ ...newProduct, author: e.target.value })
          }
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
        />
        <button
          onClick={handleCreate}
          className="w-full bg-teal-600  py-2 rounded-md text-teal-600 hover:bg-teal-700 transition"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      {status === "loading" && (
        <p className="text-center text-gray-500">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Error: {error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <img
              src={product.bookImage || "https://via.placeholder.com/150"}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600">Author: {product.author}</p>
            <p className="text-sm text-gray-600">Price: ${product.price}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleEdit(product.id)}
                className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
