import React from 'react'
import { useDispatch } from 'react-redux';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {ProductItemContainer , Icon, Circle, Info} from '../UI/Containers/ProductItemContainer'
import { cartActions } from '../features/Cart/cart-slice';

function ProductItem(props) {
  const dispatch = useDispatch();

  const addToCartHandler = ()=>{
    dispatch(cartActions.addToCart());
  }
  return (
    <ProductItemContainer>
      <img className='img' src={props.img} alt="product"/>
        <Circle />
        <Info>

          <Icon onClick={addToCartHandler}>
            <ShoppingCartOutlinedIcon />
          </Icon>

          <Icon>
            <SearchOutlinedIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
    </ProductItemContainer>
  )
}

export default ProductItem