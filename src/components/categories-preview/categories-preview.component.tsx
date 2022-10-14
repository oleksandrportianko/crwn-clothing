import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../redux/reducers/categories/categories.selector'
import { selectCategoriesIsLoading } from '../../redux/reducers/categories/categories.selector'

import CategoryPreview from '../category-preview/category-preview.component'
import Spinner from '../spinner/spinner.component'

const CategoriesPreview = () => {
   const isLoading = useSelector(selectCategoriesIsLoading)
   const categoriesArray = useSelector(selectCategoriesMap)

   return (
      <Fragment>
         {isLoading ? <Spinner /> :
            (Object.keys(categoriesArray).map((title) => {
               const products = categoriesArray[title]
               return (
                  <CategoryPreview key={title} title={title} products={products} />
               )
            }))
         }
      </Fragment>
   )
}

export default CategoriesPreview