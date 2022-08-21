import { CART_ACTION_TYPES } from "./cart.types";

export const setCartItems = (data) => ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: data })
export const setCartIsOpen = (data) => ({ type: CART_ACTION_TYPES.SET_IS_OPEN_CART, payload: data })

const processingAddingToCart = (cartItems, item) => {
   let currentItem = cartItems.find((cartItem) => cartItem.id === item.id);

   if (currentItem) {
      return cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
   } else {
      return [...cartItems, { ...item, quantity: 1 }];
   }
}

const removeItemFromCart = (cartItems, item) => {
   return cartItems.filter((cartItem) => cartItem.id !== item.id);
}

const processingRemoveFromCart = (cartItems, item) => {
   let currentItem = cartItems.find((cartItem) => cartItem.id === item.id);

   if (currentItem.quantity < 2) {
      return cartItems.filter((cartItem) => cartItem.id !== item.id);
   } else {
      return cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
   }
}

export const setCartItemsReducer = (newCartItems) => {
   return setCartItems(newCartItems)
}

export const setIsOpenCart = (boolean) => {
   return setCartIsOpen(boolean)
}

export const addItemToCart = (cartItems, item) => {
   const newCartItems = processingAddingToCart(cartItems, item)
   return setCartItems(newCartItems)
}

export const removeQuantityFromCart = (cartItems, item) => {
   const newCartItems = processingRemoveFromCart(cartItems, item)
   return setCartItems(newCartItems)
}

export const removeItemCart = (cartItems, item) => {
   const newCartItems = removeItemFromCart(cartItems, item)
   return setCartItems(newCartItems)
}