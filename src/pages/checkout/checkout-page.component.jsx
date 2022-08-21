import React from 'react'
import { useSelector } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { selectCartItems, selectTotalCartSum } from '../../redux/reducers/cart/cart.selector'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout-page.styles'

const CheckoutPage = () => {
   const cartItems = useSelector(selectCartItems)
   const cartTotal = useSelector(selectTotalCartSum)

   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
         </CheckoutHeader>
         {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
         }
         <Total>Total: ${cartTotal}</Total>
      </CheckoutContainer>
   )
}

export default CheckoutPage