// import axios from "axios";

// const API_URL = "http://localhost:1337/api/products?populate=*";

// export const getProducts = async () => 
// {
//     try
//     {
//         const res = await axios.get(API_URL);
//         return res.data.data; 
//     } 
//     catch (err) 
//     {
//         console.error("Error fetching products:", err);
//         return null;  
//     }
// };

// export const getProductById = async (id) => 
// {
//     try 
//     {
//         const res = await axios.get(`${API_URL}/${id}`);
//         return res.data.data; 
//     } 
//     catch (err) 
//     {
//         console.error("Error fetching product by ID:", err);
//         return null;  
//     }
// }

import axios from "axios";

const API_URL = "http://localhost:1337/api/products";


export const getProducts = async () =>
{
  try 
  {
    const response = await axios.get(`${API_URL}?populate=*`);
    return response.data.data;
  } 
  catch (error) 
  {
    console.error("Error fetching products:", error);
    return null;
  }
};


export const getProductById = async (id) => 
{
  try 
  {
    const response = await axios.get(`${API_URL}/${id}?populate=*`);
    return response.data.data;
  } 
  catch (error) 
  {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};


export const createProduct = async (productData) => 
{
  try 
  {
    const response = await axios.post(API_URL, { data: productData });
    return response.data.data;
  } 
  catch (error) 
  {
    console.error("Error creating product:", error);
    return null;
  }
};


export const updateProduct = async (id, updatedData) => 
{
  try 
  {
    const response = await axios.put(`${API_URL}/${id}`, { data: updatedData });
    return response.data.data;
  } 
  catch (error) 
  {
    console.error(`Error updating product with ID ${id}:`, error);
    return null;
  }
};


export const deleteProduct = async (id) => 
{
  try 
  {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } 
  catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    return false;
  }
};
