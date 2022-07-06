import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from './reducers/user.reducer'

const logger = createLogger();

export const store = configureStore({
   reducer: {
      user: userReducer,
   },
   middleware: [thunk, logger]
})