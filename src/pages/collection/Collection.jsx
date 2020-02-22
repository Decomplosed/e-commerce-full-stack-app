import React from 'react'
import CollectionItem from '../../components/CollectionItem/CollectionItem'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

import './Collection.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return <div className='collection-page'>{}</div>
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
