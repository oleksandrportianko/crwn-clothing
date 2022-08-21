import React from 'react'
import { useSelector } from 'react-redux/es/exports';

import { addItemToCart, removeItemCart, removeQuantityFromCart } from '../../redux/reducers/cart/cart.action';
import { selectCartItems } from '../../redux/reducers/cart/cart.selector';

import { CheckoutItemContainer, ImageContainer, Image, Name, Value, Quantity, Price, Arrow, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
   const { name, price, imageUrl, quantity } = cartItem;
   const cartItems = useSelector(selectCartItems)

   const decQuantity = () => {
      removeQuantityFromCart(cartItems, cartItem)
   }

   const incQuantity = () => { 
      addItemToCart(cartItems, cartItem) 
   }

   const removeItem = () => {
      removeItemCart(cartItems, cartItem)
   }

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