import React from 'react'

import { buttonVariables } from '../../utils/variables/defaultVariables'

import { BaseButton, GoogleSignInButton, InvertedButton, PaymentSpinner } from './button.styles'

const getButton = (buttonType = buttonVariables.base) => (
   {
      [buttonVariables.base]: BaseButton,
      [buttonVariables.google]: GoogleSignInButton,
      [buttonVariables.inverted]: InvertedButton
   }[buttonType]
)

const Button = ({ children, isLoading, buttonType, ...otherProps }) => {
   const CurrentButton = getButton(buttonType)

   return (
      <CurrentButton disabled={isLoading} {...otherProps}>
         { isLoading ? <PaymentSpinner /> : children}
      </CurrentButton>
   )
}

export default Button