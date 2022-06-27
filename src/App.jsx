import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home-page.component'
import Navigation from './components/navigation/navigation.component'
import AuthenticationPage from './pages/authentication/authentication-page.component'
import ShopPage from './pages/shop/shop-page.component'
import CheckoutPage from './pages/checkout/checkout-page.component'

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