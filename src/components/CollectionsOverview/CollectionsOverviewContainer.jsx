import React from 'react'
import WithSpinner from '../WithSpinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})
