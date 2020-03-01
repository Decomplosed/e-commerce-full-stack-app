import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess
} from './user.actions'

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get()
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    )
  } catch (err) {
    yield put(googleSignInFailure(err))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
  } catch (err) {
    yield put(emailSignInFailure(err))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}
