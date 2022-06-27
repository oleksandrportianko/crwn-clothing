import React from 'react'

import { buttonVariables } from '../../utils/variables/defaultVariables'

import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'

const getButton = (buttonType = buttonVariables.base) => (
   {
      [buttonVariables.base]: BaseButton,
      [buttonVariables.google]: GoogleSignInButton,
      [buttonVariables.inverted]: InvertedButton
   }[buttonType]
)

const Button = ({ children , buttonType, ...otherProps }) => {
   const CurrentButton = getButton(buttonType)

   return (
      <CurrentButton {...otherProps}>{children}</CurrentButton>
   )
}

export default Button