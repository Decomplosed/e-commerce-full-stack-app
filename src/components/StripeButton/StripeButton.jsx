import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_kLPFEmHxkHT7AV9o9aq7HAZF00yebZCSv1'

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Shop Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
