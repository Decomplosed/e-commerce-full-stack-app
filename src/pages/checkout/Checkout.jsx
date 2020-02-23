import React from 'react'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeButton/StripeButton'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors'

import './Checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
