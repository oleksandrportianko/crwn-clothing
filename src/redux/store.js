import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'
import thunkMiddlware from 'redux-thunk';

import { userReducer } from './reducers/user.reducer'

let reducers = combineReducers({
   user: userReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware, logger));

window.store = store;

export default store;