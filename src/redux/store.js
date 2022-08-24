import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './reducers/cart/cart.reducer';
import { categoriesReducer } from './reducers/categories/categories.reducer';
import { userReducer } from './reducers/user/user.reducer'
import logger from 'redux-logger'

let reducers = combineReducers({
   user: userReducer,
   categories: categoriesReducer,
   cart: cartReducer,
});

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers)

const loggerMiddlware = [process.env.NODE_ENV === 'development' && logger].filter(Boolean) 

let store = createStore(persistedReducer, applyMiddleware(thunkMiddlware, ...loggerMiddlware));

export default store;

export const persistor = persistStore(store);