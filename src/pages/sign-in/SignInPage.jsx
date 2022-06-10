import React from 'react'
import './SignIn.scss'
import { signInWithGooglePopup, createDocumentUserFromAuth } from '../../utils/firebase/firebase'

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
      </div>
   )
}

export default SignInPage