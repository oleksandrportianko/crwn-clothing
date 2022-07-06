import { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createDocumentUserFromAuth } from '../utils/firebase/firebase'

const SET_USER_DATA = 'SET-USER-DATA';

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
}) 

const userReducer = (state, action) => {
   const { type, payload } = action;
   
   switch(type) {
      case SET_USER_DATA:
         return {
            ...state,
            currentUser: payload
         }
      default:
         return {
            ...state
         }
   }
}

const INITIAL_STATE = {
   currentUser: null,
}

export const UserProdiver = ({ children }) => {
   const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
   console.log(currentUser)

   const setCurrentUser = (user) => {
      dispatch({ type: SET_USER_DATA, payload: user })
   }
   
   const value = { currentUser, setCurrentUser }

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 