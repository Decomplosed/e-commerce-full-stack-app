import React from 'react'
import './App.css'

import Homepage from './pages/homepage/Homepage'
import { Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  )
}

export default App
