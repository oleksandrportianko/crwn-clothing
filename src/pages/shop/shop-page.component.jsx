import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../../components/categories-preview/categories-preview.component'
import Category from '../../components/category/category.component'

import { setAllCategories } from '../../redux/reducers/categories.reducer'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'

const ShopPage = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      const getCategoriesMap = async () => {
         const result = await getCategoriesAndDocuments()
         dispatch(setAllCategories(result))
      }

      getCategoriesMap()
   }, [dispatch])

   return (
      <Routes>
         <Route index element={<CategoriesPreview />} />
         <Route path=':category' element={<Category />} />
      </Routes>
   )
}

export default ShopPage