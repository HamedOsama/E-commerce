import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import FiltersContainer from '../UI/Containers/FiltersContainer';
import {Filter, FilterTitle} from '../UI/Filter';
import Title from '../UI/Title';

const Container = styled.div``;
let age ;
const Products = () => {
  return (
    <Container>
      <Navbar/>
        <Title style={{margin : '1.5rem'}}>Dresses</Title>
      <FiltersContainer>
        <Filter>
        <FilterTitle>Filter Products:</FilterTitle>
        <FormControl style={{width : 170}}>
          <InputLabel id="demo-simple-select-label">ChooseCategory</InputLabel>
          <Select
            style={{height : 50}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Choose Category"
            // onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
      </Filter>
        <Filter>
        <FilterTitle>Sort:</FilterTitle>
        <FormControl style={{width : 100}}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            style={{height : 50}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Price"
            // onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </Filter>
      </FiltersContainer>
      <ProductsList/>
      <Footer/>
    </Container>
  )
}

export default Products