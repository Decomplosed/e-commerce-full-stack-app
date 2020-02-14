import React from 'react'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
