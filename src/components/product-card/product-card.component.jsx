import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext';

import Button from '../button/Button';

import { ProductCardContainer, Image, Footer, Name, Price } from './product-card.styles'

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
         <Button onClick={addItemCart} buttonType='inversed'>Add to card</Button>
      </ProductCardContainer>
   )
}

export default ProductCard