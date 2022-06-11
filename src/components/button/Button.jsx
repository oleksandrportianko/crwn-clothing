import React from 'react'
import { buttonVariables } from '../../utils/variables/defaultVariables'
import './Button.scss'

const Button = ({ children , buttonType, ...otherProps }) => {
   return (
      <button className={`${buttonVariables[buttonType]} button-container`} {...otherProps}>{children}</button>
   )
}

export default Button