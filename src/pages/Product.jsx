import React from 'react'

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
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import FilterColor from '../UI/FilterColor'
import AddContainer from '../UI/Containers/AddContainer'
import AmountContainer from '../UI/Containers/AmountContainer'
import Amount from '../UI/Product/Amount'
import { Add, Remove } from '@mui/icons-material'
import Button from '../UI/Button'

let age;
const Product = () => {
  return (
    <ProductContainer>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" alt='product' />
        </ImageContainer>
        <InfoContainer>
          <Title style={{ fontSize: 48 }}>Denim Jumpsuit</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos, sed provident perspiciatis, a placeat minus ab suscipit laudantium illo quam sapiente? Asperiores, eligendi molestiae dolores aspernatur, quia quod voluptatibus provident necessitatibus beatae magni recusandae quibusdam? Deserunt ipsum illo sed cupiditate optio impedit nam repellendus rem temporibus, placeat id iste.</Description>
          <Price>$ 20</Price>
          <FiltersContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#000" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor color="orange" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FormControl style={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  style={{ height: 50 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Size"
                // onChange={handleChange}
                >
                  <MenuItem value={'xs'}>XS</MenuItem>
                  <MenuItem value={'s'}>S</MenuItem>
                  <MenuItem value={'m'}>M</MenuItem>
                  <MenuItem value={'l'}>L</MenuItem>
                  <MenuItem value={'xl'}>XL</MenuItem>
                </Select>
              </FormControl>
            </Filter>
          </FiltersContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount >1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </ProductContainer>
  )
}

export default Product