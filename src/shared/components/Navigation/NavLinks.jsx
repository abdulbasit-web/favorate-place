import React, {useContext} from 'react'

import './NavLinks.css'
import {NavLink} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

function NavLinks() {
  const {isLoggedIn, logout} = useContext(AuthContext)
  console.log(isLoggedIn)
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          ALL USERS
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to='/places/new'>ADD PLACE</NavLink>
        </li>
      )}
      {!isLoggedIn ? (
        <li>
          <NavLink to='/auth'>SIGNIN/SIGNUP</NavLink>
        </li>
      ) : (
        <li>
          <button onClick={() => logout()}>LOGOUT</button>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
