'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductCard() 
{
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => 
  {
    const fetchData = async () => {
      try 
      {
        const response = await axios.get('/api/hello');
        setProducts(response.data);  
      } 
      catch (error) 
      {
        setError("Failed to load products.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? 
        (
          products.map((product) =>
         (
            <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <p className="text-lg font-semibold">Price: ${product.price}</p>
              <p className="text-lg font-semibold">Id: {product.id}</p>
            </div>
          ))
        ) 
        : 
        (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}
