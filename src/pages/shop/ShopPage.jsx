import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../collection/Collection'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {}

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
