import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import { SignInAndSignUpContainer } from './SignInAndSignUp.styles'

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp
