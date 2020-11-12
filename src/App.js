import React, {useContext, useEffect} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
// import NotFound from './shared/components/NotFound'
import Users from './users/pages/Users'
import Auth from './users/pages/Auth'
import {AuthContext} from './shared/context/AuthContext'

let logoutTimer
function App() {
  const {isLoggedIn, token, userId, login, tokenExpirationDate, logout} = useContext(AuthContext)
  console.log('is Logged in=>>> ' + isLoggedIn, 'userId =>>> ', userId)
  console.log('token=>>> ' + token)

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('userData'))
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration))
    }
  }, [login])

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime()
      logoutTimer = setTimeout(logout, remainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logout, tokenExpirationDate])

  let routes
  if (token) {
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
