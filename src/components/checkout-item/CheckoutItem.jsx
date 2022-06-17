import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem }) => {
   const { name, price, imageUrl, quantity } = cartItem;
   const { removeQuantityFromCart, addItemToCart, removeItemCart } = useContext(CartContext);

   const decQuantity = () => removeQuantityFromCart(cartItem)

   const incQuantity = () => addItemToCart(cartItem)

   const removeItem = () => removeItemCart(cartItem)

   return (
      <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} alt={name} />
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>
            <div className='arrow' onClick={decQuantity}>&#10094;</div>
            <span className='value'>{quantity}</span> 
            <div className='arrow' onClick={incQuantity}>&#10095;</div>
         </span>
         <span className='price'>{price}</span>
         <div onClick={removeItem} className='remove-button'>&#10005;</div>
      </div>
   )
}

export default CheckoutItem