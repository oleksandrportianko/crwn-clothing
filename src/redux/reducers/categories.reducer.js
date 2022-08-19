const SET_ALL_CATEGORIES = 'SET-ALL-CATEGORIES'

const INITIAL_STATE = {
   categoriesArray: [],
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;

   switch(type) {
      case SET_ALL_CATEGORIES:
         return {
            ...state,
            categoriesArray: payload
         }
      default:
         return state
   }
}

export const setAllCategories = (data) => ({ type: SET_ALL_CATEGORIES, payload: data })