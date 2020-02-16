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
}
