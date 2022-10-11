import { AnyAction } from "redux";

import { setCartItems, setCartIsOpen } from "./cart.action";

import { CartState } from '../../../types'

const INITIAL_STATE: CartState = {
    isOpenCart: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action: AnyAction ): CartState => {
    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        }
    }
    if (setCartIsOpen.match(action)) {
        return {
            ...state,
            isOpenCart: action.payload
        }
    }
    return state
}