import React from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import { connect } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default ShopPage
