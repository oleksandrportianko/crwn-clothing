import { Fragment, useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Spinner from './components/spinner/spinner.component'

import { chechUserSession } from './redux/reducers/user/user.action'

const HomePage = lazy(() => import("./pages/home/home-page.component"))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout-page.component'))
const ShopPage = lazy(() => import('./pages/shop/shop-page.component'))
const AuthenticationPage = lazy(() => import('./pages/authentication/authentication-page.component'))
const Navigation = lazy(() => import("./components/navigation/navigation.component"))

const App = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(chechUserSession())
   }, [dispatch])

   return (
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
   )
}

export default App