import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignInForm from '../../components/sign-in-form/SignInForm'
import './AuthenticationPage.scss'

const AuthenticationPage = () => {
   return (
      <div className='autentication-container'>
         <SignInForm /> 
         <SignUpForm />
      </div>
   )
}

export default AuthenticationPage