import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../collection/Collection'
import { Route } from 'react-router-dom'

import { firestore } from '../../firebase/firebase.utils'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

export default ShopPage
