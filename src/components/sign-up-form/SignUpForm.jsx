import React, { useState } from 'react'
import { defaultFormSignUpFields } from '../../utils/variables/defaultVariables'
import { createDocumentUserFromAuth, userAuthCreatedWithEmailAndPassword } from '../../utils/firebase/firebase'
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

      const { user } = await userAuthCreatedWithEmailAndPassword(email, password)
      const result = await createDocumentUserFromAuth(user, { displayName })
      console.log(result)
      resetSignUpForm()
   }

   return (
      <div>
         <h1>Sign up form with display name and password</h1>
         <form onSubmit={submitSignUpForm}>
            <label>Display name</label>
            <input type="text" onChange={changeValue} required value={displayName} name='displayName' />
            <label>Email</label>
            <input type="email" onChange={changeValue} required value={email} name='email' />
            <label>Password</label>
            <input type="password" onChange={changeValue} required value={password} name='password' />
            <label>Confirm password</label>
            <input type="password" onChange={changeValue} required value={confirmPassword} name='confirmPassword' />
            <button type='submit'>Sign up</button>
         </form>
      </div>
   )
}

export default SignUpForm