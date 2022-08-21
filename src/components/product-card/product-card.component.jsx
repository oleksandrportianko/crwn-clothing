import React from 'react'

import { buttonVariables } from '../../utils/variables/defaultVariables';

import { addItemToCart } from '../../redux/reducers/cart/cart.action';

import { ProductCardContainer, Image, Footer, Name, Price, ButtonContainer } from './product-card.styles'

const ProductCard = ({ product }) => {
   const { name, price, imageUrl } = product;

   const addItemCart = () => addItemToCart(product)

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