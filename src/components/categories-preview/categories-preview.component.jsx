import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../redux/reducers/categories/categories.selector'

import CategoryPreview from '../category-preview/category-preview.component'

const CategoriesPreview = () => {
   const categoriesArray = useSelector(selectCategoriesMap)

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