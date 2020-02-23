import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_kLPFEmHxkHT7AV9o9aq7HAZF00yebZCSv1'

  return <StripeCheckout />
}
