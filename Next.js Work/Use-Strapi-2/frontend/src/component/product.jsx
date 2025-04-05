// 'use client';
// import React, { useEffect, useState } from 'react';
// import { getProducts, createProduct, updateProduct, deleteProduct } from '@/lib/api';

// const ProductComponent = () => 
// {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => 
//   {
//     const fetchedProducts = await getProducts();
//     if (fetchedProducts) setProducts(fetchedProducts);
//   };

//   useEffect(() => 
//   {
//     fetchProducts();
//   }, []);

//   const handleCreateProduct = async () => 
//   {
//     const newProduct = { name: 'New Product', price: 100 };
//     const createdProduct = await createProduct(newProduct);
//     if (createdProduct) setProducts([...products, createdProduct]);
//   };

//   const handleUpdateProduct = async (id) => 
//   {
//     const updatedData = { price: 150 };
//     const updatedProduct = await updateProduct(id, updatedData);
//     if (updatedProduct) 
//     {
//       setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
//     }
//   };

//   const handleDeleteProduct = async (id) => 
//   {
//     const isDeleted = await deleteProduct(id);
//     if (isDeleted) 
//     {
//       setProducts(products.filter(product => product.id !== id));
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <button onClick={handleCreateProduct} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Product</button>
//       <div className="grid gap-4">
//         {products.map(product => (
//           <div key={product.id} className="p-4 border rounded-lg shadow">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-700">Price: ${product.price}</p>
//             <div className="mt-2 space-x-2">
//               <button onClick={() => handleUpdateProduct(product.id)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Update Price</button>
//               <button onClick={() => handleDeleteProduct(product.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;

'use client';
import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '@/lib/api';

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    if (fetchedProducts) setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdProduct = await createProduct(newProduct);
    if (createdProduct) {
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
      setNewProduct({ name: '', price: '' });
      setShowForm(false);
    }
  };

  const handleUpdateProduct = async (id) => {
    const updatedData = { price: 150 };
    const updatedProduct = await updateProduct(id, updatedData);
    if (updatedProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === id ? updatedProduct : product))
      );
    }
  };

  const handleDeleteProduct = async (id) => {
    const isDeleted = await deleteProduct(id);
    if (isDeleted) {
        
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    }
   
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Product
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleUpdateProduct(product.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Update Price
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
