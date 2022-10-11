import { ActionWithPayload, Action } from "../../types"

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload}
}