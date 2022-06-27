import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import { CartIconContainer, ShoppingCart, ItemCount } from './cart-icon.styles'

import shoppingBug from '../../assets/shopping-bug.svg'

const CartIcon = () => {
   const { isOpenCart, setIsOpenCart, amountOfItems } = useContext(CartContext)

   const toggleOpenCart = () => {
      setIsOpenCart(!isOpenCart)
   }

   return (
      <CartIconContainer onClick={toggleOpenCart}>
         <ShoppingCart src={shoppingBug} alt="Shopping bug" />
         <ItemCount className='item-count'>{amountOfItems}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon