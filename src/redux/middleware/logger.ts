import { Middleware } from "redux"

import { RootState } from "../store"

export const loggerMiddlware: Middleware<{}, RootState> = (state) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', state.getState())

    next(action)

    console.log('new state: ', state.getState())
}