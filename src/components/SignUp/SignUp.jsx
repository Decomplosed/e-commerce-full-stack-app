import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, createUserProfilDocument } from '../../firebase/firebase.utils'

import './SignUp.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      dispalyName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
          ></FormInput>
          <FormInput></FormInput>
          <FormInput></FormInput>
          <FormInput></FormInput>
        </form>
      </div>
    )
  }
}
