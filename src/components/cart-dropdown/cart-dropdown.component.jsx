import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { buttonVariables } from '../../utils/variables/defaultVariables'

import { selectCartItems } from '../../redux/reducers/cart/cart.selector'
import { setIsOpenCart } from '../../redux/reducers/cart/cart.action'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const redirectToCheckout = () => {
      navigate('/checkout')
      dispatch(setIsOpenCart(false))
   }

   return (
      <CartDropdownContainer>
         <CartItems>
            {
               cartItems.length 
                  ? cartItems.map(cartItem => (
                     <CartItem key={cartItem.id} cartItem={cartItem} />
                  )) 
                  : <EmptyMessage>Your cart is empty</EmptyMessage>
            }
         </CartItems>
         <Button buttonType={buttonVariables.base} onClick={redirectToCheckout} >Go to checkout</Button>
      </CartDropdownContainer>
   )
}

export default CartDropdown