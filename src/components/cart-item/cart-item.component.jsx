import React from 'react'

import { CartItemContainer, CartItemImage, ItemDetails, Name } from './cart-item.styles'

const CartItem = ({ cartItem }) => {
   const { name, price, imageUrl, quantity } = cartItem

   return (
      <CartItemContainer>
         <CartItemImage src={imageUrl} alt={name} />
         <ItemDetails>
            <Name>{name}</Name>
            <span>{quantity} x ${price}</span>
         </ItemDetails>
      </CartItemContainer>
   )
}

export default CartItem