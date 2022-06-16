import React from 'react'
import shoppingBug from '../../assets/shopping-bug.svg'
import './CartIcon.scss'

const CartIcon = () => {
   return (
      <div className='cart-icon-container'>
         <img src={shoppingBug} className="shopping-icon" alt="Shopping bug" />
         <span className='item-count'>0</span>
      </div>
   )
}

export default CartIcon