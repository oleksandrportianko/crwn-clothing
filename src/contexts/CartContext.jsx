import { createContext, useEffect, useState } from "react";
import { processingAddingToCart } from "../utils/helpers/processingAddingToCart";
import { sumOfItemsArray } from "../utils/helpers/sumOfAllArrayItems";

export const CartContext = createContext({
   isOpenCart: false,
   setIsOpenCart: () => null,
   cartItems: [],
   addItemToCart: () => null,
   amountOfItems: 0,
})

export const CartProvider = ({ children }) => {
   const [isOpenCart, setIsOpenCart] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [amountOfItems, setAmountOfItems] = useState(0);

   useEffect(() => {
      setAmountOfItems(sumOfItemsArray(cartItems));
   }, [cartItems])

   const addItemToCart = (item) => {
      setCartItems(processingAddingToCart(cartItems, item))
   }

   const value = { isOpenCart, setIsOpenCart, cartItems, addItemToCart, amountOfItems, setCartItems }


   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}