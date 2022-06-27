import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { buttonVariables } from '../../utils/variables/defaultVariables'

import { CartContext } from '../../contexts/CartContext'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

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
         <Button buttonType={buttonVariables.base} onClick={redirectToCheckout} >Go to checkout</Button>
      </CartDropdownContainer>
   )
}

export default CartDropdown