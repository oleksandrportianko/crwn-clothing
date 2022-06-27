import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Navigation from './components/navigation/navigation.component'
import AuthenticationPage from './pages/authentication/AuthenticationPage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/CheckoutPage'

const App = () => {
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