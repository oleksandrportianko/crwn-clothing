import React, { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import './ShopPage.scss'

const ShopPage = () => {
   const { } = useContext(CategoriesContext)

   return (
      <div className='products-container'>
         {/* { 
            products && products.map(product => (
               <ProductCard key={product.id} product={product} />
            ))
         } */}
      </div>
   )
}

export default ShopPage