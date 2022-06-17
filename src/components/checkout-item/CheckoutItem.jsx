import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem }) => {
   const { name, price, imageUrl, quantity } = cartItem;
   const { cartItems, setCartItems } = useContext(CartContext);

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
      <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} alt={name} />
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>{quantity}</span>
         <span className='price'>{price}</span>
         <div onClick={() => removeItem(cartItem)} className='remove-button'>&#10005;</div>
      </div>
   )
}

export default CheckoutItem