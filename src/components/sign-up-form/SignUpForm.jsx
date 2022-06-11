import React, { useState } from 'react'
import { defaultFormSignUpFields } from '../../utils/variables/defaultVariables'
import { createDocumentUserFromAuth, userAuthCreatedWithEmailAndPassword } from '../../utils/firebase/firebase'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import './SignUpForm.scss'

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormSignUpFields)
   const { displayName, email, password, confirmPassword } = formFields;

   const changeValue = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value })
      console.log(formFields)
   }

   const resetSignUpForm = () => {
      setFormFields(defaultFormSignUpFields)
   }

   const submitSignUpForm = async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) return;

      try {
         const { user } = await userAuthCreatedWithEmailAndPassword(email, password)
         const result = await createDocumentUserFromAuth(user, { displayName })
         console.log(result)
         resetSignUpForm()
      } catch (error) {
         console.log(error.message)
      }
   }

   return (
      <div className='sign-up-container'>
         <h2>Don`t have an account?</h2>
         <span>Sign up with email and password</span>
         <form onSubmit={submitSignUpForm}>
            <FormInput label='Display name' type="text" onChange={changeValue} required value={displayName} name='displayName' />
            <FormInput label='Email' type="email" onChange={changeValue} required value={email} name='email' />
            <FormInput label='Password' type="password" onChange={changeValue} required value={password} name='password' />
            <FormInput label='Confirm password' type="password" onChange={changeValue} required value={confirmPassword} name='confirmPassword' />
            <Button type='submit'>Sign up</Button>
         </form>
      </div>
   )
}

export default SignUpForm