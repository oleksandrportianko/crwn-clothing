import { FC, memo } from 'react'

import { CartItemProps } from '../../types'

import { CartItemContainer, CartItemImage, ItemDetails, Name } from './cart-item.styles'

type CartItemComponentProps = {
   cartItem: CartItemProps,
}

const CartItem: FC<CartItemComponentProps> = memo(({ cartItem }) => {
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
})

export default CartItem