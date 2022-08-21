import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { buttonVariables } from '../../utils/variables/defaultVariables';

import { addItemToCart } from '../../redux/reducers/cart/cart.action';
import { selectCartItems } from '../../redux/reducers/cart/cart.selector';

import { ProductCardContainer, Image, Footer, Name, Price, ButtonContainer } from './product-card.styles'

const ProductCard = ({ product }) => {
   const { name, price, imageUrl } = product;
   const cartItems = useSelector(selectCartItems)

   const dispatch = useDispatch()

   const addItemCart = () => {
      dispatch(addItemToCart(cartItems, product))
   }

   return (
      <ProductCardContainer>
         <Image src={imageUrl} alt={name} />
         <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
         </Footer>
         <ButtonContainer onClick={addItemCart} buttonType={buttonVariables.base}>Add to card</ButtonContainer>
      </ProductCardContainer>
   )
}

export default ProductCard