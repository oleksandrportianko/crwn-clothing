import { applyMiddleware, legacy_createStore as createStore, Middleware } from 'redux';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer } from './root.reducer';
import { rootSaga } from './root-saga'

export type RootState = ReturnType<typeof rootReducer>

type ExtendedPersistConfig = PersistConfig<RootState> & {
   whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware() 

const persistedReducer = persistReducer(persistConfig, rootReducer)

const loggerMiddlware = [process.env.NODE_ENV === 'development' && logger].filter((middleware): middleware is Middleware => Boolean(middleware)) 

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, ...loggerMiddlware));

export default store;

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);