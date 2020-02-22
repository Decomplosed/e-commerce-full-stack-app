import React from 'react'

import CollectionItem from '../../components/CollectionItem/CollectionItem'

import './Collection.styles.scss'

const CollectionPage = ({ match }) => {
  console.log(match.params.categoryId)
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
    </div>
  )
}

export default CollectionPage
