import React from 'react'
import MainMenu from './MainMenu '
import ProductCard from './ProductCard'
import CategorySection from './CategorySection'
import ProductSection from './ProductSection'
import DealProduct from './DealProduct'
import InstagramSection from './InstagramSection'


const Home = () => {
  return (
    <>
      <MainMenu/>
      <CategorySection/>
      <ProductSection/>
      <DealProduct/>
      <InstagramSection/>
      {/* <ProductCard /> */}
    </>
  )
}

export default Home;
