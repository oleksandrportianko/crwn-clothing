import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';

import { addItemToCart, removeItemCart, removeQuantityFromCart } from '../../redux/reducers/cart/cart.action';
import { selectCartItems } from '../../redux/reducers/cart/cart.selector';

import { CheckoutItemContainer, ImageContainer, Image, Name, Value, Quantity, Price, Arrow, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
   const { name, price, imageUrl, quantity } = cartItem;
   const cartItems = useSelector(selectCartItems)

   const dispatch = useDispatch()

   const decQuantity = () => {
      dispatch(removeQuantityFromCart(cartItems, cartItem))
   }

   const incQuantity = () => { 
      dispatch(addItemToCart(cartItems, cartItem)) 
   }

   const removeItem = () => {
      dispatch(removeItemCart(cartItems, cartItem))
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