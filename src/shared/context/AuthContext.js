import React, {createContext, useCallback, useState} from 'react'

export const AuthContext = createContext()

function AuthProvider(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  },[])

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  },[])

return <AuthContext.Provider value={{isLoggedIn , login ,logout}}>{props.children}</AuthContext.Provider>
}

export default AuthProvider;

