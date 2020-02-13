import React from 'react'
import './App.css'

import Homepage from './pages/homepage/Homepage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Homepage} />
      </Switch>
    </div>
  )
}

export default App
