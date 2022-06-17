import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import shoppingBug from '../../assets/shopping-bug.svg'
import './CartIcon.scss'

const CartIcon = () => {
   const { isOpenCart, setIsOpenCart } = useContext(CartContext)

   const toggleOpenCart = () => {
      setIsOpenCart(!isOpenCart)
   }

   return (
      <div className='cart-icon-container' onClick={toggleOpenCart}>
         <img src={shoppingBug} className="shopping-icon" alt="Shopping bug" />
         <span className='item-count'>0</span>
      </div>
   )
}

export default CartIcon