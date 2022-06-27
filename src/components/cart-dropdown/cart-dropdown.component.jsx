import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
   const { cartItems, setIsOpenCart } = useContext(CartContext)
   let navigate = useNavigate()

   const redirectToCheckout = () => {
      navigate('/checkout')
      setIsOpenCart(false)
   }

   return (
      <CartDropdownContainer>
         <CartItems>
            {
               cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
               ))
            }
         </CartItems>
         <Button onClick={redirectToCheckout} >Go to checkout</Button>
      </CartDropdownContainer>
   )
}

export default CartDropdown