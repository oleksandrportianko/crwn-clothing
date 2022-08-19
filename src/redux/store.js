import { applyMiddleware, combineReducers, createStore } from 'redux';
// import logger from 'redux-logger'
import thunkMiddlware from 'redux-thunk';

import { categoriesReducer } from './reducers/categories/categories.reducer';
import { userReducer } from './reducers/user/user.reducer'

let reducers = combineReducers({
   user: userReducer,
   categories: categoriesReducer,
});

const loggerMiddlware = (state) => (next) => (action) => {
   if (!action.type) {
      return next(action)
   }

   console.log('type: ', action.type)
   console.log('payload: ', action.payload)
   console.log('currentState: ', state.getState())

   next(action)

   console.log('new state: ', state.getState())
}

let store = createStore(reducers, applyMiddleware(thunkMiddlware, loggerMiddlware));

export default store;