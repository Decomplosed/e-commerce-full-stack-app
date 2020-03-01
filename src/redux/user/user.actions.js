import UserActionTypes from './user.types'

export const signInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
})

export const googleSignInFailure = err => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: err
})

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})
