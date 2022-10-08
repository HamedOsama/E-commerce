import React from 'react'
import CategoryItemContainer from '../UI/Containers/CategoryItemContainer'

function CategoryItem(props) {
  return (
    <CategoryItemContainer>
      <img className="img" src={props.img} alt="category" />
      <div className='info'>
      <h2 className='title'>{props.title}</h2>
      <button className='btn'>Shop Now</button>
      </div>
    </CategoryItemContainer>
  )
}

export default CategoryItem