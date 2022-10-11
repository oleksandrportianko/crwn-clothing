import { AnyAction } from 'redux'

import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action'

import { CategoriesState } from '../../../types'

const INITIAL_STATE: CategoriesState = {
   categoriesArray: [],
   isLoading: false,
   error: null,
}

export const categoriesReducer = (state = INITIAL_STATE, action = {} as AnyAction) => {
   if (fetchCategoriesStart.match(action)) {
      return {
         ...state,
         isLoading: true,
      }
   }
   if (fetchCategoriesSuccess.match(action)) {
      return {
         ...state,
         categoriesArray: action.payload,
         isLoading: false,
      }
   }
   if (fetchCategoriesFailed.match(action)) {
      return {
         ...state,
         categoriesArray: action.payload,
         isLoading: false,
      }
   }
   return state
}