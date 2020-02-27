import React from 'react'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer'
import CollectionPageContainer from '../collection/CollectionContainer'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionLoaded } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
