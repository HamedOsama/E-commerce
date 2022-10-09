import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API_BASE_URL from '../api_route'
import ProductsContainer from '../UI/Containers/ProductsContainer'
import ProductItem from './ProductItem'
const emptyFunction = () => { }
function ProductsList({ cat, sort, setLoading = emptyFunction, isLoading }) {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url;
    if (location.pathname === '/')
      url = '/product/top'
    else url = `/product?category=${cat}`
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const req = await fetch(API_BASE_URL + url);
        const products = await req.json();
        if (products?.ok === false)
          return;
        setProducts(products)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetchProducts()
  }, [cat, location, setLoading])

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "des") {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [cat, sort]);
  // console.log(products)
  return (
    <ProductsContainer isLoading={isLoading}>
      {products?.map(el => {
        return <ProductItem img={el.img} key={el._id} id={el._id} />
      }
      )}
    </ProductsContainer>
  )
}

export default ProductsList