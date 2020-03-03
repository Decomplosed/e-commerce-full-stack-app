import { all, call, takeLatest, put } from 'redux-saga/effects'

import UserActionTypes from '../user/user.actions'
import { clearCart } from './cart.actions'

export function* cartSagas() {
  yield all([])
}
