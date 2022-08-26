import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../../components/categories-preview/categories-preview.component'
import Category from '../../components/category/category.component'

import { fetchCategoriesStart} from '../../redux/reducers/categories/categories.action'

const ShopPage = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchCategoriesStart())
   }, [dispatch])

   return (
      <Routes>
         <Route index element={<CategoriesPreview />} />
         <Route path=':category' element={<Category />} />
      </Routes>
   )
}

export default ShopPage