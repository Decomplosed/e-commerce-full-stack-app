import React, { useEffect, lazy, Suspense } from 'react'
import Header from './components/Header/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import { GlobalStyle } from './global.styles'

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const ShopPage = lazy(() => import('./pages/shop/ShopPage'))
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout'))
const SignInAndSignUp = lazy(() =>
  import('./pages/sign-in-and-sing-up/SignInAndSignUp')
)

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path='/' component={Homepage} />
        </Suspense>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
