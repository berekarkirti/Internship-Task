'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProducts, editProducts, getProducts } from '@/redux-counter/curd/postthunk';

const Home3 = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  const handleEdit = (id) => {
    console.log(`Edit product with ID: ${id}`);
    dispatch(editProducts())
  };

  const handleDelete = (id) => {
    console.log(`Delete product with ID: ${id}`);
    dispatch(deleteProducts())
  };

  if (status === 'loading') return <p className="text-center text-lg">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-teal-600 min-h-screen py-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Books List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.bookImage}
              alt={product.Title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.Title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Author: <span className="font-medium">{product.Author}</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Published: {product.PublishedDate}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                ISBN: {product.ISBN}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Price: <span className="text-green-600 font-medium">${product.Price}</span>
              </p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {product.Description}
              </p>
              <div className="flex gap-2">
                <button
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg "
                  onClick={() => handleEdit(product._id)}
                >
                  Edit
                </button>
                <button
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home3;
