import React, { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { ProductsContext } from '../../contexts/ProductsContext'
import './ShopPage.scss'

const ShopPage = () => {
   const { products } = useContext(ProductsContext)

   return (
      <div className='products-container'>
         { 
            products && products.map(products => (
               <ProductCard key={products.id} products={products} />
            ))
         }
      </div>
   )
}

export default ShopPage