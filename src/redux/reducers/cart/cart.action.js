import { CART_ACTION_TYPES } from "./cart.types";

export const setCartItems = (data) => ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: data })
 
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

 const setCartItemsReducer = (cartItems, newCartItems) => {
    return setCartItems(newCartItems)
 }

 const setIsOpenCart = (boolean) => {
    return setCartItems(boolean)
 }

 const addItemToCart = (cartItems, item) => {
    const newCartItems = processingAddingToCart(cartItems, item)
    return setCartItems(newCartItems)
 }

 const removeQuantityFromCart = (cartItems, item) => {
    const newCartItems = processingRemoveFromCart(cartItems, item)
    return setCartItems(newCartItems)
 }

 const removeItemCart = (cartItems, item) => {
    const newCartItems = removeItemFromCart(cartItems, item)
    return setCartItems(newCartItems)
 }