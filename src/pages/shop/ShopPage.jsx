import React, { useContext } from 'react'
import './ShopPage.scss'
import { ProductsContext } from '../../contexts/ProductsContext'

const ShopPage = () => {
   const { products } = useContext(ProductsContext)

   return (
      <div>
         { 
            products && products.map(product => (
               <div key={product.id}>
                  <h1>{product.name}</h1>
               </div>
            ))
         }
      </div>
   )
}

export default ShopPage