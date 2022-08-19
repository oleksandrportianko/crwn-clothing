import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import CategoryPreview from '../category-preview/category-preview.component'

const CategoriesPreview = () => {
   const categoriesArray = useSelector((state) => state.categories.categoriesArray.reduce((acc, docShapshot) => {
      const { title, items } = docShapshot
      acc[title.toLowerCase()] = items
      return acc
   }, {}))

   return (
      <Fragment>
         {
            Object.keys(categoriesArray).map((title) => {
               const products = categoriesArray[title]
               return (
                  <CategoryPreview key={title} title={title} products={products} />
               )
            })
         }
      </Fragment>
   )
}

export default CategoriesPreview