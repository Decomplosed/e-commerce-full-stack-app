import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './CollectionsOverview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-oveerview'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
)
