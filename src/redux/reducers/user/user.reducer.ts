import { AnyAction } from 'redux';

import { signInSuccess, signOutSuccess, signInError, signUpError, signOutError } from './user.action';

import { UserState } from '../../../types';

const INITIAL_STATE: UserState = {
   currentUser: null,
   isLoading: false,
   error: null,
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
   if (signInSuccess.match(action)) {
      return {
         ...state,
         currentUser: action.payload
      }
   }
   if (signOutSuccess.match(action)) {
      return {
         ...state,
         currentUser: null
      }
   }
   if (signInError.match(action) || signOutError.match(action) || signUpError.match(action)) {
      return {
         ...state,
         error: action.payload
      }
   }
   return state
}
