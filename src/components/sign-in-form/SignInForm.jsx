import React, { useState, useContext } from 'react'
import { defaultFormSignInFields } from '../../utils/variables/defaultVariables'
import { createDocumentUserFromAuth, signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase'
import { UserContext } from '../../contexts/UserContext'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import './SignInForm.scss'

const SignInForm = () => {
   const [formFields, setFormFields] = useState(defaultFormSignInFields)
   const { email, password } = formFields;
   const { setCurrentUser } = useContext(UserContext)

   const changeValue = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value })
   }

   const resetSignInForm = () => {
      setFormFields(defaultFormSignInFields)
   }

   const signInWithGoogle = async () => {
      const result = await signInWithGooglePopup()
      createDocumentUserFromAuth(result.user)
   }

   const submitSignInForm = async (event) => {
      event.preventDefault();

      try {
         const { user } = await signInAuthWithEmailAndPassword(email, password)
         setCurrentUser(user)
         resetSignInForm()
      } catch (error) {
         switch(error.code) {
            case 'auth/user-not-found':
               alert('user not found')
               break;
            case 'auth/wrong-password':
               alert('wrong password')
               break;
            default:
               alert(error)
         }
      }
   }

   return (
      <div className='sign-in-container'>
         <h2>Already have an account?</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={submitSignInForm}>
            <FormInput label='Email' type="email" onChange={changeValue} required value={email} name='email' />
            <FormInput label='Password' type="password" onChange={changeValue} required value={password} name='password' />
            <div className='buttons-container'>
               <Button type='submit'>Sign in</Button>
               <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google sign in</Button>
            </div>
         </form>
      </div>
   )
}

export default SignInForm