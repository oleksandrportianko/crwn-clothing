import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Navigation from './components/navigation/Navigation'
import SignInPage from './pages/sign-in/SignInPage'

const App = () => {
   return (
      <Fragment>
         <div className='app-navigation'>
            <Navigation />
         </div>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-in' element={<SignInPage />} />
         </Routes>
      </Fragment>
   )
}

export default App