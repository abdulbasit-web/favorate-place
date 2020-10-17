import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import NotFound from './shared/components/NotFound'
import Users from './users/pages/Users'


function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/places/new'>
          <NewPlace />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      </main>
    </Router>
  )
}

export default App
