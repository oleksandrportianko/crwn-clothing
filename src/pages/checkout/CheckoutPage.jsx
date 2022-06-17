import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CheckoutPage.scss'

const CheckoutPage = () => {
   const { cartItems, setCartItems } = useContext(CartContext)
   let totalSum = 0;  

   for (let i = 0; i < cartItems.length; i++) {
      let currentProductSum = cartItems[i].price * cartItems[i].quantity;
      totalSum += currentProductSum; 
   }

   const decQuantity = (item) => {
      if (item.quantity < 2) {
         removeItem(item)
      } else {
         const newCartArray = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
         setCartItems(newCartArray)
      }
   }

   const incQuantity = (item) => {
      const newCartArray = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      setCartItems(newCartArray)
   }

   const removeItem = (item) => {
      const newCartArray = cartItems.filter((cartItem) => cartItem.id !== item.id)
      setCartItems(newCartArray)
   }

   return (
      <div className='checkout-page-container'>
         <div>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
         </div>
         <div className='checkout-page-items'>
            {
               cartItems.map((item, index) => {
                  return (
                     <div key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => decQuantity(item)}>Dec</button>
                        <button onClick={() => incQuantity(item)}>Inc</button>
                        <span>{item.quantity} x {item.price}</span>
                        <button onClick={() => removeItem(item)}>remove</button>
                     </div>
                  )
               })
            }
         </div>
         <span>Total sum: ${totalSum}</span>
      </div>
   )
}

export default CheckoutPage