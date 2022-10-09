import React from 'react'
import { popularProducts } from '../data'
import ProductsContainer from '../UI/Containers/ProductsContainer'
import ProductItem from './ProductItem'
function ProductsList({ cat, sort }) {
  console.log(cat, sort)
  return (
    <ProductsContainer>
      {popularProducts.map(el => {
        if (!cat || cat === 'All Products')
          return <ProductItem img={el.img} key={el.id} id={el.id} />
        if (cat && cat !== 'All Products')
          return el.cat === cat ? (<ProductItem img={el.img} key={el.id} />) : null
      }
      )}
    </ProductsContainer>
  )
}

export default ProductsList