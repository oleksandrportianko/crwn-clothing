import React, { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import './ShopPage.scss'

const ShopPage = () => {
   const { categoriesMap } = useContext(CategoriesContext)

   return (
      <div className='shop-container'>
         {
            Object.keys(categoriesMap).map((title) => {
               const products = categoriesMap[title]
               return (
                  <CategoryPreview key={title} title={title} products={products} />
               )
            })
         }
      </div>
   )
}

export default ShopPage