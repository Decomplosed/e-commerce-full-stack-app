import React from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import { connect } from 'redux'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
)

export default ShopPage
