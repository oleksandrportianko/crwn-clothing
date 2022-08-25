import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import thunkMiddlware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer } from './root.reducer';
import { rootSaga } from './root-saga'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware() 

const persistedReducer = persistReducer(persistConfig, rootReducer)

const loggerMiddlware = [process.env.NODE_ENV === 'development' && logger].filter(Boolean) 

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, ...loggerMiddlware));

export default store;

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);