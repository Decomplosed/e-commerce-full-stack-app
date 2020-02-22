import React from 'react'

import CollectionItem from '../../components/CollectionItem/CollectionItem'

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
