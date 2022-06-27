import React, { useContext } from 'react'

import { buttonVariables } from '../../utils/variables/defaultVariables';

import { CartContext } from '../../contexts/CartContext';

import { ProductCardContainer, Image, Footer, Name, Price, ButtonContainer } from './product-card.styles'

const ProductCard = ({ product }) => {
   const { addItemToCart } = useContext(CartContext)
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