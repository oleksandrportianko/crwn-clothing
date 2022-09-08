import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { selectCurrentUser } from '../../redux/reducers/user/user.selector'
import { selectIsOpenCart } from '../../redux/reducers/cart/cart.selector'

import { signOutStart } from '../../redux/reducers/user/user.action'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'

import logoSvg from '../../assets/logo.svg'

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx'

const Navigation = () => {
   const currentUser = useSelector(selectCurrentUser)
   const isOpenCart = useSelector(selectIsOpenCart)

   const dispatch = useDispatch()

   const signOutUserHandle = () => {
      dispatch(signOutStart())
   }

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
                     <NavLink as='span' onClick={signOutUserHandle}>Sign out</NavLink>
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