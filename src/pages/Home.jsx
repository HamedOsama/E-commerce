import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'
import Slider from '../components/Slider'
function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <ProductsList />
      <Footer />
    </>
  )
}

export default Home

