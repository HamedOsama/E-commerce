import React, { useState } from 'react'
import {SliderContainer , SliderWrapper} from '../UI/Containers/SliderContainer'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowContainer from '../UI/Containers/ArrowContainer';

import Slide from '../UI/Slider/Slide';
import ImageContainer from '../UI/Containers/ImageContainer';
import InfoContainer from '../UI/Containers/InfoContainer';
import Image from '../UI/Image';

import {slides} from '../data'
function Slider() {
  const [sliderPosition , setSliderPosition] = useState(0);
  const swipeSlide = (direction)=>{
    if(direction === 'left' && sliderPosition !== 0)
    setSliderPosition(prev => prev += 100);
    if(direction === 'right' && sliderPosition !== -100 * (slides.length-1))
    setSliderPosition(prev => prev -= 100);
  }
  return (
    <SliderContainer>
      {sliderPosition < 0 && 
        <ArrowContainer left="10px" onClick={ ()=> swipeSlide('left')}>
        <ArrowBackIosRoundedIcon/>
      </ArrowContainer>
      }
      <SliderWrapper sliderPosition={sliderPosition}>
      {
        slides.map(el=>( 
          <Slide key={el.id} bg={el.bg}>
        <ImageContainer>
          <Image src={el.img_url} alt='slide'/>
        </ImageContainer>
        <InfoContainer>
          <h1 className='title'>{el.title}</h1>
          <p className='description'>{el.description}</p>
          <button className='btn' type='button'>SHOW NOW</button>
        </InfoContainer>
      </Slide>
      ))
    }
      </SliderWrapper>
      {
        sliderPosition > -(slides.length -1) * 100 &&
        <ArrowContainer right="10px" onClick={ ()=> swipeSlide('right')}>
        <ArrowForwardIosRoundedIcon/>
      </ArrowContainer>
      }
    </SliderContainer>
  )
}

export default Slider