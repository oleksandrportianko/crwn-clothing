import React, {useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductCard from '../product-card/product-card.component'

import { selectCategoriesMap } from '../../redux/reducers/categories/categories.selector'

import { CategoryContainer, CategoryTitle } from './category.styles'

const Category = () => {
   const { category } = useParams()
   const categoriesMap = useSelector(selectCategoriesMap)
   const [products, setProducts] = useState(categoriesMap[category])
   
   useEffect(() => {
      setProducts(categoriesMap[category])
   }, [category, categoriesMap])

   return (
      <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
         {
            products && products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))
         }
      </CategoryContainer>
      </Fragment>
   )
}

export default Category