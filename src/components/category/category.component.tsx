import { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductCard from '../product-card/product-card.component'
import Spinner from '../spinner/spinner.component'

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../redux/reducers/categories/categories.selector'

import { CategoryContainer, CategoryTitle } from './category.styles'

type CategoryRouteParams = {
   category: string,
}

const Category = () => {
   const { category } = useParams<CategoryRouteParams>() as CategoryRouteParams
   const categoriesMap = useSelector(selectCategoriesMap)
   const isLoading = useSelector(selectCategoriesIsLoading)
   const [products, setProducts] = useState(categoriesMap[category])

   useEffect(() => {
      setProducts(categoriesMap[category])
   }, [category, categoriesMap])

   return (
      <Fragment>
         <CategoryTitle>{category}</CategoryTitle>
         {isLoading ? <Spinner /> :
            <CategoryContainer>
               {
                  products && products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))
               }
            </CategoryContainer>
         }
      </Fragment>
   )
}

export default Category