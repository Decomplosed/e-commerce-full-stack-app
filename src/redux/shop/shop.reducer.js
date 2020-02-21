import SHOP_DATA from './shop.data'
import { bindActionCreators } from 'redux'

const INITIAL_STATE = {
  colelctions: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
