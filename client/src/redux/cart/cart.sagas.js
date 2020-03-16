import { all, call, takeLatest, put, select } from 'redux-saga/effects'

import { getUserCartRef } from '../../firebase/firebase.utils'

import UserActionTypes from '../user/user.types'
import { clearCart, setCartFromFirebase } from './cart.actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
