import React from 'react'
import Button from '../button/Button';
import './ProductCard.scss'

const ProductCard = ({ products }) => {

   const { name, price, imageUrl } = products;

   return (
      <div className='product-card-container'>
         <img src={imageUrl} alt={name} />
         <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
         </div>
         <Button buttonType='inversed'>Add to card</Button>
      </div>
   )
}

export default ProductCard