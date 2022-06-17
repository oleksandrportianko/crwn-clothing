import React, { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CartContext } from '../../contexts/CartContext'
import './CheckoutPage.scss'

const CheckoutPage = () => {
   const { cartItems } = useContext(CartContext)
   let totalSum = 0;

   for (let i = 0; i < cartItems.length; i++) {
      let currentProductSum = cartItems[i].price * cartItems[i].quantity;
      totalSum += currentProductSum;
   }

   return (
      <div className='checkout-container'>
         <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
               <span>Description</span>
            </div>
            <div className='header-block'>
               <span>Quantity</span>
            </div>
            <div className='header-block'>
               <span>Price</span>
            </div>
            <div className='header-block'>
               <span>Remove</span>
            </div>
         </div>
         {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
         }
         <span className='total'>Total: ${totalSum}</span>
      </div>
   )
}

export default CheckoutPage