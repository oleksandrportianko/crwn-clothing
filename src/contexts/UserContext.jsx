import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase'

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
}) 

export const UserProdiver = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null)
   const value = { currentUser, setCurrentUser }

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         setCurrentUser(user)
         console.log(user)
      })
   }, [])

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 