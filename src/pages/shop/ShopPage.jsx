import React, { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { ProductsContext } from '../../contexts/ProductsContext'
import './ShopPage.scss'

const ShopPage = () => {
   const { products } = useContext(ProductsContext)

   return (
      <div className='products-container'>
         { 
            products && products.map(product => (
               <ProductCard key={product.id} product={product} />
            ))
         }
      </div>
   )
}

export default ShopPage