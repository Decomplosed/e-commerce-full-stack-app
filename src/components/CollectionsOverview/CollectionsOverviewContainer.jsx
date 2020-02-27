import React from 'react'
import WithSpinner from '../WithSpinner/WithSpinner'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
