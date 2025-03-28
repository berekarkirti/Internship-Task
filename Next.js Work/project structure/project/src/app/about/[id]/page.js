// import React from 'react'
// import { products } from '@/data/project'

// const page = async ({ params }) => {

//     const { id } = await params;
//     const product = products.find((z) => z.id === id)

//     return (
//         <div className='min-h-screen bg-pink-400'>
//             <h1>Product Detail</h1>
//             <p>Product ID: {id}</p>
//             {/* <p>Product Slug: {slug}</p> */}
//             <p>Here you can display detailed information about the product.</p>

//         </div>
//     )
// }

// export default page

import React from 'react';
import { products } from '@/data/project';
import ErrorPage from '../error';

const page = async ({ params }) => {
  const { id } = await params;
  const product = products.find((z) => z.id === id);

  if (!product) {
    return (
        <ErrorPage />
    );
  }

  return (
    <div className='min-h-screen bg-pink-400'>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <p>Name: {product.name}</p>
      <p>Here you can display detailed information about the product.</p>
    </div>
  );
};

export default page;
