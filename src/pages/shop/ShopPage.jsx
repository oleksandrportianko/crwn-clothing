import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../components/categories-preview/categories-preview.component'
import Category from '../../components/category/Category'

const ShopPage = () => {
   return (
      <Routes>
         <Route index element={<CategoriesPreview />} />
         <Route path=':category' element={<Category />} />
      </Routes>
   )
}

export default ShopPage