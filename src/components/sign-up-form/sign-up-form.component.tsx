import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { defaultFormSignUpFields, buttonVariables } from '../../utils/variables/defaultVariables'
import { signUpStart } from '../../redux/reducers/user/user.action'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { SignUpContainer, Title } from './sign-up-form.styles'

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormSignUpFields)
   const { displayName, email, password, confirmPassword } = formFields;

   const dispatch = useDispatch()

   const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value })
   }

   const resetSignUpForm = () => {
      setFormFields(defaultFormSignUpFields)
   }

   const submitSignUpForm = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (password !== confirmPassword) return;

      try {
         dispatch(signUpStart(email, password, displayName))
         resetSignUpForm()
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <SignUpContainer>
         <Title>Don`t have an account?</Title>
         <span>Sign up with with email and password</span>
         <form onSubmit={submitSignUpForm}>
            <FormInput label='Display name' type="text" onChange={changeValue} required value={displayName} name='displayName' />
            <FormInput label='Email' type="email" onChange={changeValue} required value={email} name='email' />
            <FormInput label='Password' type="password" onChange={changeValue} required value={password} name='password' />
            <FormInput label='Confirm password' type="password" onChange={changeValue} required value={confirmPassword} name='confirmPassword' />
            <Button buttonType={buttonVariables.base} type='submit'>Sign up</Button>
         </form>
      </SignUpContainer>
   )
}

export default SignUpForm