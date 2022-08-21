import React from 'react'
import { useSelector } from 'react-redux'

import { selectIsOpenCart, selectSumItemsArray } from '../../redux/reducers/cart/cart.selector'
import { setIsOpenCart } from '../../redux/reducers/cart/cart.action'

import shoppingBug from '../../assets/shopping-bug.svg'

import { CartIconContainer, ShoppingCart, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
   const isOpenCart = useSelector(selectIsOpenCart)
   const amountOfItems = useSelector(selectSumItemsArray)

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