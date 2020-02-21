import React from 'react'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'

import './CollectionsOverview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-oveerview'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default CollectionsOverview
