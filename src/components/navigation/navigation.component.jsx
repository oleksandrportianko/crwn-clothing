import React, { Fragment, useContext } from 'react'
import { useSelector } from 'react-redux/es/exports'

import { signOutUser } from '../../utils/firebase/firebase'
import { CartContext } from '../../contexts/CartContext'

import { selectCurrentUser } from '../../redux/reducers/user/user.selector'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import logoSvg from '../../assets/logo.svg'

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx'

const Navigation = () => {
   const { isOpenCart } = useContext(CartContext)
   const currentUser = useSelector(selectCurrentUser)

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