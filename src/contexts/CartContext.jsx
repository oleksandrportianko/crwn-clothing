import { createContext, useReducer } from "react";

const countOfTotalCartSum = (cartItems) => {
   const countSum = cartItems.reduce(function (a, b) {
      return a + b.quantity * b.price;
   }, 0)
   return countSum;
}

const sumOfItemsArray = (cartItems) => {
   const countSum = cartItems.reduce(function (a, b) {
      return a + b.quantity
   }, 0)
   
   return countSum
}

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

export const CartContext = createContext({
   isOpenCart: false,
   setIsOpenCart: () => null,
   cartItems: [],
   addItemToCart: () => null,
   amountOfItems: 0,
   cartTotal: 0,
   removeItemCart: () => null,
})

const SET_CART_ITEMS = 'SET-CART-ITEMS';
const SET_IS_OPEN_CART = 'SET-IS-OPEN-CART';

const INITIAL_STATE = {
   isOpenCart: false,
   cartItems: [],
   amountOfItems: 0,
   cartTotal: 0,
}

const cartReducer = (state, action) => {
   const { type, payload } = action;

   switch(type) {
      case SET_CART_ITEMS:
         return {
            ...state,
            ...payload
         }
      case SET_IS_OPEN_CART: 
         return {
            ...state,
            isOpenCart: payload
         }
      default:
         return {
            ...state
         }
   }
}

export const CartProvider = ({ children }) => {
   const [ { isOpenCart, cartItems, amountOfItems, cartTotal } , dispatch ] = useReducer(cartReducer, INITIAL_STATE)

   const setCartItemsReducer = (newCartItems) => {
      const sumOfItems = sumOfItemsArray(newCartItems)
      const countTotalCart = countOfTotalCartSum(newCartItems)
      dispatch({ type: SET_CART_ITEMS, payload: { cartItems: newCartItems, amountOfItems: sumOfItems, cartTotal: countTotalCart } })
   }

   const setIsOpenCart = (boolean) => {
      dispatch({ type: SET_IS_OPEN_CART, payload: boolean })
   }

   const addItemToCart = (item) => {
      const newCartItems = processingAddingToCart(cartItems, item)
      setCartItemsReducer(newCartItems)
   }

   const removeQuantityFromCart = (item) => {
      const newCartItems = processingRemoveFromCart(cartItems, item)
      setCartItemsReducer(newCartItems)
   }

   const removeItemCart = (item) => {
      const newCartItems = removeItemFromCart(cartItems, item)
      setCartItemsReducer(newCartItems)
   }

   const value = { isOpenCart, setIsOpenCart, cartItems, addItemToCart, amountOfItems, cartTotal, removeItemCart, removeQuantityFromCart }


   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}