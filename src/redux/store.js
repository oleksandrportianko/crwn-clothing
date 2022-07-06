import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'
import thunkMiddlware from 'redux-thunk';

import { categoriesReducer } from './reducers/categories.reducer';
import { userReducer } from './reducers/user.reducer'

let reducers = combineReducers({
   user: userReducer,
   categories: categoriesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware, logger));

export default store;