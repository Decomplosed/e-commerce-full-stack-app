import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user.actions'

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils'

export function* signInWithGoogle() {
  
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START)
}
