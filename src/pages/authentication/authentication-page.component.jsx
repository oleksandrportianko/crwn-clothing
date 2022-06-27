import React from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import { AuthenticationContainer } from './authentication-page.styles'

const AuthenticationPage = () => {
   return (
      <AuthenticationContainer>
         <SignInForm /> 
         <SignUpForm />
      </AuthenticationContainer>
   )
}

export default AuthenticationPage