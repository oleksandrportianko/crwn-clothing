import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { defaultFormSignInFields, buttonVariables } from '../../utils/variables/defaultVariables'

import { emailSignInStart, googleSignInStart } from '../../redux/reducers/user/user.action'

import FormInput from '../form-input/form-input.component'

import Button from '../button/button.component'

import { SignInContainer, Title, ButtonsContainer } from './sign-in-form.styles'

const SignInForm = () => {
   const [formFields, setFormFields] = useState(defaultFormSignInFields)
   const { email, password } = formFields;

   const dispatch = useDispatch();

   const changeValue = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value })
   }

   const resetSignInForm = () => {
      setFormFields(defaultFormSignInFields)
   }

   const signInWithGoogle = async () => {
      dispatch(googleSignInStart())
   }

   const submitSignInForm = async (event) => {
      event.preventDefault();

      try {
         dispatch(emailSignInStart({ email, password }))
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
      <SignInContainer>
         <Title>Already have an account?</Title>
         <span>Sign in with your email and password</span>
         <form onSubmit={submitSignInForm}>
            <FormInput label='Email' type="email" onChange={changeValue} required value={email} name='email' />
            <FormInput label='Password' type="password" onChange={changeValue} required value={password} name='password' />
            <ButtonsContainer>
               <Button buttonType={buttonVariables.base} type='submit'>Sign in</Button>
               <Button type='button' buttonType={buttonVariables.google} onClick={signInWithGoogle} >Google sign in</Button>
            </ButtonsContainer>
         </form>
      </SignInContainer>
   )
}

export default SignInForm