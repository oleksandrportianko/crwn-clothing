import { FC, ButtonHTMLAttributes } from 'react'

import { buttonVariables } from '../../utils/variables/defaultVariables'

import { BaseButton, GoogleSignInButton, InvertedButton, PaymentSpinner } from './button.styles'

const getButton = (buttonType = buttonVariables.base): typeof BaseButton => (
   {
      [buttonVariables.base]: BaseButton,
      [buttonVariables.google]: GoogleSignInButton,
      [buttonVariables.inverted]: InvertedButton
   }[buttonType]
)

export type ButtonProps = {
   buttonType?: buttonVariables,
   isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, isLoading, buttonType, ...otherProps }) => {
   const CurrentButton = getButton(buttonType)

   return (
      <CurrentButton disabled={isLoading} {...otherProps}>
         { isLoading ? <PaymentSpinner /> : children}
      </CurrentButton>
   )
}

export default Button