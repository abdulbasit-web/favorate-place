import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NewPlace from './places/pages/NewPlace'
import MainHeader from './shared/components/Navigation/MainHeader'
import NotFound from './shared/components/NotFound'
import Users from './users/pages/Users'


function App() {
  return (
    <Router>
      <MainHeader/>
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
