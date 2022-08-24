import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './reducers/cart/cart.reducer';
import { categoriesReducer } from './reducers/categories/categories.reducer';
import { userReducer } from './reducers/user/user.reducer'

let reducers = combineReducers({
   user: userReducer,
   categories: categoriesReducer,
   cart: cartReducer,
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

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer, applyMiddleware(thunkMiddlware, loggerMiddlware));

export default store;

export const persistor = persistStore(store);