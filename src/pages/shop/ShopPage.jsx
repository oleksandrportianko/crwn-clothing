import React, { Fragment, useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import './ShopPage.scss'

const ShopPage = () => {
   const { categoriesMap } = useContext(CategoriesContext)

   return (
      <Fragment>
         {
            Object.keys(categoriesMap).map((title) => (
               <Fragment>
                  <h2>{title}</h2>
                  <div className='products-container'>
                     {
                        categoriesMap[title].map(product => (
                           <ProductCard key={product.id} product={product} />
                        ))
                     }
                  </div>
               </Fragment>
            ))
         }
      </Fragment>
   )
}

export default ShopPage