import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Navigation from './components/navigation/Navigation'
import AuthenticationPage from './pages/authentication/Authentication'

const App = () => {
   return (
      <Fragment>
         <div className='app-navigation'>
            <Navigation />
         </div>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthenticationPage />} />
         </Routes>
      </Fragment>
   )
}

export default App