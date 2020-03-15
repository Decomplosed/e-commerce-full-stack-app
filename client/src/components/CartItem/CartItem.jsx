import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './CartItem.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt={`${name} item`} />
    <ItemDetailsContainer>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem)
