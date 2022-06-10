import React from 'react'
import { signInWithGooglePopup, createDocumentUserFromAuth } from '../../utils/firebase/firebase'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import './SignIn.scss'

const SignInPage = () => {

   const signIn = async () => {
      const result = await signInWithGooglePopup()
      console.log(result)
      createDocumentUserFromAuth(result.user)
   }

   return (
      <div>
         SignInPage
         <button onClick={signIn}>
            signInWithGooglePopup
         </button>
         <SignUpForm />
      </div>
   )
}

export default SignInPage