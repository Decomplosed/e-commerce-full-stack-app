import React, { useEffect } from 'react'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/Checkout'
import SignInAndSignUp from './pages/sign-in-and-sing-up/SignInAndSignUp'
import Header from './components/Header/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import './App.css'

class App extends React.Component {
  unsubscribeFromAuth = null

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
