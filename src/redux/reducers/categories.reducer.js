const SET_ALL_CATEGORIES = 'SET-ALL-CATEGORIES'

const INITIAL_STATE = {
   categoriesMap: [],
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;

   switch(type) {
      case SET_ALL_CATEGORIES:
         return {
            ...state,
            categoriesMap: payload
         }
      default:
         return state
   }
}

export const setAllCategories = (data) => ({ type: SET_ALL_CATEGORIES, payload: data })