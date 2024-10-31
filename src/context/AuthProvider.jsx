import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
        
    const [userData, setUSerData] = useState(null)

    useEffect(() => {
        const {employees, admin} = getLocalStorage()
        setUSerData({employees, admin}) 
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={userData}>
             {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
