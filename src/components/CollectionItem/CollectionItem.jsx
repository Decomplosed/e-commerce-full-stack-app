import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

import './CollectionItem.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
)

export default CollectionItem
