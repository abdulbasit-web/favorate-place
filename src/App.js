import React, {useContext} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
// import NotFound from './shared/components/NotFound'
import Users from './users/pages/Users'
import Auth from './users/pages/Auth'
import {AuthContext} from './shared/context/AuthContext'

function App() {
  const {isLoggedIn} = useContext(AuthContext)
  console.log(isLoggedIn)

  let routes
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/places/new'>
          <NewPlace />
        </Route>
        <Route path='/:uid/places'>
          <UserPlaces />
        </Route>
        <Route path='/places/:placeId'>
          <UpdatePlace />
        </Route>
        <Redirect to='/' />
        {/* <Route>
            <NotFound />
          </Route> */}
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/:uid/places'>
          <UserPlaces />
        </Route>

        <Route path='/auth'>
          <Auth />
        </Route>
        <Redirect to='/auth' />
      </Switch>
    )
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        {routes}

        {/* <Route>
            <NotFound />
          </Route> */}
      </main>
    </Router>
  )
}

export default App
