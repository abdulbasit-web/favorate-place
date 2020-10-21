import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import NotFound from './shared/components/NotFound'
import Users from './users/pages/Users'
import Auth from './users/pages/Auth'


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
        <Route path='/auth'>
          <Auth />
        </Route>
        
        <Route path='/places/new'>
          <NewPlace />
        </Route>
        <Route path='/places/:placeId'>
          <UpdatePlace/>
        </Route>
        <Route path='/:uid/places'>
          <UserPlaces />
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
