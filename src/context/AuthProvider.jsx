import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [userData, setuserData] = useState(null)
    useEffect(() => {
        const localStorageData = getLocalStorage() || {};
        const {employees, admin} = localStorageData;
        setuserData({employees, admin});
    }, [])
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
