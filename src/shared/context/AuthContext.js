import React, {createContext, useCallback, useState} from 'react'

export const AuthContext = createContext()

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(null)

  const login = useCallback(id => {
    setIsLoggedIn(true)
    setUserId(id)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, userId}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
