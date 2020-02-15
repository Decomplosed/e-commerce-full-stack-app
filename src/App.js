import React from 'react'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUp from './pages/sign-in-and-sing-up/SignInAndSignUp'
import Header from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
