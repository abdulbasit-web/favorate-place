import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewPlace from './places/pages/NewPlace'
import NotFound from './shared/components/NotFound'
import Users from './users/pages/Users'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
