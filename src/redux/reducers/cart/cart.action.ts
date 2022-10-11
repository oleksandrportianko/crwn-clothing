import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../../utils/createAction/createAction";

import { CartItem, ActionWithPayload, CategoryItem, withMatch } from '../../../types'

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_OPEN_CART, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setCartItems = withMatch((data: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, data))
export const setCartIsOpen = withMatch((boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_OPEN_CART, boolean))

const processingAddingToCart = (cartItems: CartItem[], item: CategoryItem) => {
   let currentItem = cartItems.find((cartItem) => cartItem.id === item.id);

   if (currentItem) {
      return cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
   } else {
      return [...cartItems, { ...item, quantity: 1 }];
   }
}

const removeItemFromCart = (cartItems: CartItem[], item: CartItem) => {
   return cartItems.filter((cartItem) => cartItem.id !== item.id);
}

const processingRemoveFromCart = (cartItems: CartItem[], item: CartItem) => {
   let currentItem = cartItems.find((cartItem) => cartItem.id === item.id);

   if (currentItem && currentItem.quantity < 2) {
      return cartItems.filter((cartItem) => cartItem.id !== item.id);
   } else {
      return cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
   }
}

export const setCartItemsReducer = (newCartItems: CartItem[]) => {
   return setCartItems(newCartItems)
}

export const setIsOpenCart = (boolean: boolean) => {
   return setCartIsOpen(boolean)
}

export const addItemToCart = (cartItems: CartItem[], item: CartItem) => {
   const newCartItems = processingAddingToCart(cartItems, item)
   return setCartItems(newCartItems)
}

export const removeQuantityFromCart = (cartItems: CartItem[], item: CartItem) => {
   const newCartItems = processingRemoveFromCart(cartItems, item)
   return setCartItems(newCartItems)
}

export const removeItemCart = (cartItems: CartItem[], item: CartItem) => {
   const newCartItems = removeItemFromCart(cartItems, item)
   return setCartItems(newCartItems)
}