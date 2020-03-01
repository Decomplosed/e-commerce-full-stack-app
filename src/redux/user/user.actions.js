import UserActionTypes from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export const SignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const SignInSuccess = user => ({
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
