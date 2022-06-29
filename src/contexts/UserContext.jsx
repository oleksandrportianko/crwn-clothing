import { type } from '@testing-library/user-event/dist/type'
import { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createDocumentUserFromAuth } from '../utils/firebase/firebase'

const SET_USER_DATA = 'SET-USER-DATA';

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
}) 

const userReducer = (state, action) => {
   const { type, payload } = action;
   console.log('in user reducer')
   
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
   // const [currentUser, setCurrentUser] = useState(null)
   const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
   console.log(currentUser)

   const setCurrentUser = (user) => {
      dispatch({ type: SET_USER_DATA, payload: user })
   }
   
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