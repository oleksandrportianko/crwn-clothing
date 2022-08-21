import React from 'react'

import { addItemToCart, removeItemCart, removeQuantityFromCart } from '../../redux/reducers/cart/cart.action';

import { CheckoutItemContainer, ImageContainer, Image, Name, Value, Quantity, Price, Arrow, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
   const { name, price, imageUrl, quantity } = cartItem;

   const decQuantity = () => removeQuantityFromCart(cartItem)

   const incQuantity = () => addItemToCart(cartItem)

   const removeItem = () => removeItemCart(cartItem)

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <Image src={imageUrl} alt={name} />
         </ImageContainer>
         <Name>{name}</Name>
         <Quantity>
            <Arrow onClick={decQuantity}>&#10094;</Arrow>
            <Value>{quantity}</Value> 
            <Arrow onClick={incQuantity}>&#10095;</Arrow>
         </Quantity>
         <Price>{price}</Price>
         <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
   )
}

export default CheckoutItem