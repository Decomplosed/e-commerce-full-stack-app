import WithSpinner from '../WithSpinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)
