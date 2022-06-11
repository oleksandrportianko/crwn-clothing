import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignInForm from '../../components/sign-in-form/SignInForm'
import './Authentication.scss'

const SignInPage = () => {

   return (
      <div className='autentication-container'>
         <SignInForm /> 
         <SignUpForm />
      </div>
   )
}

export default SignInPage