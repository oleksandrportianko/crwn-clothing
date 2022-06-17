import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import './CartDropdown.scss'

const CartDropdown = () => {
   const { cartItems, setIsOpenCart } = useContext(CartContext)
   let navigate = useNavigate()

   const redirectToCheckout = () => {
      navigate('/checkout')
      setIsOpenCart(false)
   }

   return (
      <div className='cart-dropdown-container'>
         <div className='cart-items'>
            {
               cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
               ))
            }
         </div>
         <Button onClick={redirectToCheckout} >Go to checkout</Button>
      </div>
   )
}

export default CartDropdown