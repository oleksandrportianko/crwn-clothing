import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview'

const ShopPage = () => {
   return (
      <Routes>
         <Route index element={<CategoriesPreview />} />
      </Routes>
   )
}

export default ShopPage