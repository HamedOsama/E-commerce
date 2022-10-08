import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Container from '../UI/Containers/NavbarContainer'
import Center from '../UI/Navbar/Center'
import Left from '../UI/Navbar/Left'
import Right from '../UI/Navbar/Right'
import Wrapper from '../UI/Wrapper'
import SearchContainer from '../UI/Containers/SearchContainer';
import SearchInput from '../UI/Inputs/SearchInput';
import Logo from '../UI/Logo';
import { Link } from 'react-router-dom';


function Navbar() {
  const searchInputRef = useRef();
  const focusSearchHandler = () => {
    searchInputRef.current.focus();
  }
  const cart = useSelector(state => state.cart.cartItemsLength);
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer onClick={focusSearchHandler}>
            <SearchInput placeholder='Search' ref={searchInputRef} />
            <SearchIcon onClick={focusSearchHandler} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Commerce</Logo>
        </Center>
        <Right>
          <Link to="/" className='format'>
            <MenuItem className='menu-item'>Home</MenuItem>
          </Link>
          <Link to="/products" className='format'>
            <MenuItem className='menu-item'>Products</MenuItem>
          </Link>
          <Link to="/contact-us" className='format'>
            <MenuItem className='menu-item'>Contact us</MenuItem>
          </Link>
          <MenuItem className='menu-item'>
            <Badge badgeContent={cart} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}



export default Navbar