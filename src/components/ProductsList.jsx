import React from 'react'
import { popularProducts } from '../data'
import ProductsContainer from '../UI/Containers/ProductsContainer'
import ProductItem from './ProductItem'
function ProductsList() {
  return (
    <ProductsContainer>
    {popularProducts.map(el=> 
      <ProductItem img={el.img} key ={el.id}/>
    )}
    </ProductsContainer>
  )
}

export default ProductsList