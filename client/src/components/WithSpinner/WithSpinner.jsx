import React from 'react'
import Spinner from '../Spinner/Spinner'

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
