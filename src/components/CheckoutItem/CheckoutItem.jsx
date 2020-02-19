import React from 'react'

import './CheckoutItem.styles.scss'

const CheckoutItem = () => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' />
    </div>
    <div className='name'></div>
    <div className='quantity'></div>
    <div className='price'></div>
    <div className='remove-button'>&#10005;</div>
  </div>
)

export default CheckoutItem
