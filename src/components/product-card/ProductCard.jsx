import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import './ProductCard.scss'

const ProductCard = ({ product }) => {
   const { addItemToCart } = useContext(CartContext)
   const { name, price, imageUrl } = product;

   return (
      <div className='product-card-container'>
         <img src={imageUrl} alt={name} />
         <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
         </div>
         <Button onClick={() => addItemToCart(product)} buttonType='inversed'>Add to card</Button>
      </div>
   )
}

export default ProductCard