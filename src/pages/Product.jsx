import React, { useEffect, useState, useCallback } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BounceLoader } from 'react-spinners';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductContainer from '../UI/Containers/ProductContainer'
import Wrapper from '../UI/Product/ProductWrapper'
import ImageContainer from '../UI/Product/ImageContainer'
import Image from '../UI/Product/Image'
import InfoContainer from '../UI/Product/InfoContainer'
import Title from '../UI/Title'
import Description from '../UI/Product/Description'
import Price from '../UI/Product/Price'
import FiltersContainer from '../UI/Containers/FiltersContainer'
import { Filter, FilterTitle } from '../UI/Filter'
import FilterColor from '../UI/FilterColor'
import AddContainer from '../UI/Containers/AddContainer'
import AmountContainer from '../UI/Containers/AmountContainer'
import Amount from '../UI/Product/Amount'
import Button from '../UI/Button'
import { cartActions } from '../features/Cart/cart-slice'
// import { popularProducts as products } from '../data'
import API_BASE_URL from '../api_route'
import BackToProducts from '../components/BackToProducts'
import Overlay from '../components/Overlay'

const Product = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart());
  }
  const setLoadingHandler = useCallback((state) => {
    setIsLoading(state)
  }, [])
  const changeColorHandler = (color) => {
    setColor(prev => color)
  }
  const changeSizeHandler = (e) => {
    setSize(prev => e.target.value)
  }
  const increaseAmountHandler = () => {
    setAmount(prev => prev + 1)
  }
  const decreaseAmountHandler = () => {
    setAmount(prev => prev > 1 ? prev - 1 : prev)
  }
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoadingHandler(true)
        const req = await fetch(API_BASE_URL + '/product/find/' + productId)
        const product = await req.json()
        if (product?.ok === false) {
          history.push('/')
        }
        setProduct(product);
        setLoadingHandler(false);
      } catch (e) {
        console.log(e)
      }
    }
    fetchProduct();
    // const product = products.find(el => el.id === +productId)
    // setProduct(prev => product);
  }, [productId, history, setLoadingHandler])

  return (
    <ProductContainer>
      {isLoading && <Overlay />}
      {isLoading
        &&
        <BounceLoader
          color="#36d7b7"
          speedMultiplier={1.5}
          className="loader"
        />
      }
      <Navbar />
      <Wrapper style={{ display: isLoading ? 'none' : 'flex' }}>
        <BackToProducts />
        <ImageContainer>
          <Image src={product?.img} alt='product' />
        </ImageContainer>
        <InfoContainer>
          <Title style={{ fontSize: 48 }}>{product?.title}</Title>
          <Description>{product?.desc}</Description>
          <Price>$ {product?.price}</Price>
          <FiltersContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                product?.color?.map(el => (
                  <FilterColor
                    className={color === el ? 'active' : ''}
                    key={el}
                    color={el === 'white' ? '#cdcdcd' : el}
                    onClick={() => changeColorHandler(el)}
                  />
                ))
              }
              {/* <FilterColor color="darkblue" /> */}
              {/* <FilterColor color="gray" /> */}
              {/* <FilterColor color="orange" /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FormControl style={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  style={{ height: 50 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Size"
                  onChange={changeSizeHandler}
                >
                  {product?.size?.map(el => (
                    <MenuItem key={el} value={el}>{`${el}`?.toUpperCase()}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Filter>
          </FiltersContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: 'pointer' }} onClick={decreaseAmountHandler} />
              <Amount >{amount}</Amount>
              <Add style={{ cursor: 'pointer' }} onClick={increaseAmountHandler} />
            </AmountContainer>
            <Button onClick={addToCartHandler}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </ProductContainer>
  )
}

export default Product