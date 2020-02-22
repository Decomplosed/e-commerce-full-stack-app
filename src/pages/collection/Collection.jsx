import React from 'react'
import CollectionItem from '../../components/CollectionItem/CollectionItem'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

import './Collection.styles.scss'

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId)
  return (
    <div className='collection-page'>
      <h2>CATEGORY PAGE</h2>
    </div>
  )
}

export default CollectionPage
