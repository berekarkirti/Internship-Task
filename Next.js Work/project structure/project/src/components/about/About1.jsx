import React from 'react'
import Link from "next/link";
import { products } from '@/data/project';

const About1 = () => {


  return (
    <div>
      <h1 className='min-h-screen bg-pink-400'>About-1</h1>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Link href={`/about/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-100 h-70 object-cover mx-auto cursor-pointer " />
              </Link>
              <p className="mt-2 text-sm font-medium">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About1
