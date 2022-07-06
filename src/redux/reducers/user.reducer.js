const SET_CURRENT_USER = 'SET-CURRENT-USER';

const INITIAL_STATE = {
   currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;
   
   switch(type) {
      case SET_CURRENT_USER:
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

export const setCurrentUser = (data) => ({ type: SET_CURRENT_USER, payload: data })
