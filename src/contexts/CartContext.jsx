import { createContext, useState } from "react";

const processingAddingToCart = (cartItems, item) => {
   let newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
   console.log('newCartItems in start', newCartItems);
   const currentProduct = cartItems.find((cartItem) => cartItem.id === item.id);
   console.log('currentProduct', currentProduct);
   if (currentProduct) {
      newCartItems.push({
         ...item,
         quantity: currentProduct.quantity + 1,
      })
   } else {
      newCartItems.push({
         ...item,
         quantity: 1,
      })
   }

   console.log('newCartItems in end', newCartItems);
   return newCartItems;
}

export const CartContext = createContext({
   isOpenCart: false,
   setIsOpenCart: () => null,
   cartItems: [],
   addItemToCart: () => null,
})

export const CartProvider = ({ children }) => {
   const [isOpenCart, setIsOpenCart] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   const addItemToCart = (item) => {
      console.log(item)
      setCartItems(processingAddingToCart(cartItems, item))
   }

   const value = { isOpenCart, setIsOpenCart, cartItems, addItemToCart }


   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}