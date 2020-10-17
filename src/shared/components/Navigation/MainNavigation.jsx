import React from 'react'
import { Link } from 'react-router-dom'

import './MainNavigation.css'

function MainNavigation() {
  return (
    <>
      <button className="main-navigation__menu-btn">
        <span/>
        <span/>
        <span/>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlace</Link>
      </h1>
      <nav>

      </nav>
    </>
  )
}

export default MainNavigation
