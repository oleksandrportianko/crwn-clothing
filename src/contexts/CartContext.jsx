import { createContext, useEffect, useState, useReducer } from "react";

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

const CART_IS_CHANGING = 'CART-IS-CHANGING';

const INITIAL_STATE = {
   isOpenCart: false,
   cartItems: [],
   amountOfItems: 0,
   cartTotal: 0,
}

const cartReducer = (state, action) => {
   const { type, payload } = action;

   switch(type) {
      case CART_IS_CHANGING:
         return {
            ...state,
            ...payload
         }
      default:
         return {
            ...state
         }
   }
}

export const CartProvider = ({ children }) => {
   const [isOpenCart, setIsOpenCart] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [amountOfItems, setAmountOfItems] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);
   const { state, dispatch } = useReducer(cartReducer, INITIAL_STATE)

   useEffect(() => {
      setAmountOfItems(sumOfItemsArray(cartItems));
   }, [cartItems])

   useEffect(() => {
      setCartTotal(countOfTotalCartSum(cartItems))
   }, [cartItems])

   const addItemToCart = (item) => {
      setCartItems(processingAddingToCart(cartItems, item))
   }

   const removeQuantityFromCart = (item) => {
      setCartItems(processingRemoveFromCart(cartItems, item))
   }

   const removeItemCart = (item) => {
      setCartItems(removeItemFromCart(cartItems, item))
   }

   const value = { isOpenCart, setIsOpenCart, cartItems, addItemToCart, amountOfItems, setCartItems, cartTotal, removeItemCart, removeQuantityFromCart }


   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}