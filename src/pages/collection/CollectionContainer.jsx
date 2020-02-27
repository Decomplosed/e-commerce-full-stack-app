import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsColletionLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
