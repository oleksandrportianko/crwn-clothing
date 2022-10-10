import { CATEGORIES_ACTION_TYPES } from './categories.types'

import { CategoriesAction } from './categories.action'
import { CategoriesState } from '../../../types'

const INITIAL_STATE: CategoriesState = {
   categoriesArray: [],
   isLoading: false,
   error: null,
}

export const categoriesReducer = (state = INITIAL_STATE, action = {} as CategoriesAction) => {
   switch(action.type) {
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
         return {
            ...state,
            isLoading: true,
         }
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload,
         }
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
         return {
            ...state,
            categoriesArray: action.payload,
            isLoading: false,
         }
      default:
         return state
   }
}