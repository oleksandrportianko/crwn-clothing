import React, { Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import HomePage from './pages/home/home-page.component'
import Navigation from './components/navigation/navigation.component'
import AuthenticationPage from './pages/authentication/authentication-page.component'
import ShopPage from './pages/shop/shop-page.component'
import CheckoutPage from './pages/checkout/checkout-page.component'

import { createDocumentUserFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase'
import { setCurrentUser } from './redux/reducers/user/user.action'

const App = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      onAuthStateChangedListener((user) => {
         if (user) {
            createDocumentUserFromAuth(user)
         }
         dispatch(setCurrentUser(user))
      })
   }, [dispatch])

   return (
      <Fragment>
         <div className='app-navigation'>
            <Navigation />
         </div>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthenticationPage />} />
            <Route path='/shop/*' element={<ShopPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
         </Routes>
      </Fragment>
   )
}

export default App