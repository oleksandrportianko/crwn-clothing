import { createSelector } from "reselect";

import { RootState } from "../../store";
import { CartState } from "../../../types";

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsOpenCart = createSelector(
    [selectCartReducer],
    (cart) => cart.isOpenCart
)

export const selectTotalCartSum = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(function (a, b) {
        return a + b.quantity * b.price;
    }, 0)
)

export const selectSumItemsArray = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(function (a, b) {
       return a + b.quantity
    }, 0)
)