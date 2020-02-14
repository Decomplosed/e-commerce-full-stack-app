import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.styles.scss'

const Header = () => (
  <div className='header'>
    <Link to='/'></Link>
  </div>
)

export default Header
