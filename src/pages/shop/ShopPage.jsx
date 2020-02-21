import React from 'react'
import { selectCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
)

export default ShopPage
