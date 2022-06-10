import React from 'react'
import './SignIn.scss'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'

const SignInPage = () => {

   const signIn = async () => {
      const result = await signInWithGooglePopup()
      console.log(result)
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