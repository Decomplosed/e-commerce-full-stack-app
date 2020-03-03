import { all, call, takeLatest, put } from 'redux-saga/effects'

import UserActionTypes from '../user/user.actions'
import { clearCart } from './cart.actions'

export function* clearCartSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS)
}

export function* cartSagas() {
  yield all([])
}
