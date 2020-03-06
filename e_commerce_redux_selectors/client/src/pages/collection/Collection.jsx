import React from 'react'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import CollectionsContext from '../../contexts/collections/collections.context'

import './Collection.styles.scss'

const CollectionPage = ({ match }) => {
  return (
    <CollectionsContext.Consumer>
      {collections => {
        const collection = collections[match.params.collectionId]
        const { title, items } = collection
        return (
          <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
              {items.map(item => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )
      }}
    </CollectionsContext.Consumer>
  )
}

export default CollectionPage