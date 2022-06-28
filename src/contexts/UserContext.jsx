import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, createDocumentUserFromAuth } from '../utils/firebase/firebase'

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
}) 

export const UserProdiver = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null)
   const value = { currentUser, setCurrentUser }

   useEffect(() => {
      onAuthStateChangedListener((user) => {
         if (user) {
            createDocumentUserFromAuth(user)
         }
         setCurrentUser(user)
      })
   }, [])

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 