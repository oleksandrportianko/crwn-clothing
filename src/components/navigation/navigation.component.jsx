import React, { Fragment, useContext } from 'react'

import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase'
import { CartContext } from '../../contexts/CartContext'

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import logoSvg from '../../assets/logo.svg'

const Navigation = () => {
   const { currentUser } = useContext(UserContext)
   const { isOpenCart } = useContext(CartContext)

   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to='/'>
               <img src={logoSvg} alt="" />
            </LogoContainer>
            <NavLinksContainer>
               <NavLink to='/shop'>Shop</NavLink>
               {
                  currentUser ?
                     <NavLink as='span' onClick={signOutUser}>Sign out</NavLink>
                     :
                     <NavLink className='nav-link' to='/auth'>Sign in</NavLink>
               }
               <CartIcon />
            </NavLinksContainer>
            { isOpenCart && <CartDropdown /> } 
         </NavigationContainer>
      </Fragment>
   )
}

export default Navigation