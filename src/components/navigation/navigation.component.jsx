import React, { Fragment, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'

import { getCategoriesAndDocuments, signOutUser } from '../../utils/firebase/firebase'
import { CartContext } from '../../contexts/CartContext'

import { setAllCategories } from '../../redux/reducers/categories.reducer'

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import logoSvg from '../../assets/logo.svg'

const Navigation = () => {
   const { isOpenCart } = useContext(CartContext)
   const currentUser = useSelector((state) => state.user.currentUser)

   const dispatch = useDispatch()

   useEffect(() => {
      const getCategoriesMap = async () => {
         const result = await getCategoriesAndDocuments()
         dispatch(setAllCategories(result))
      }

      getCategoriesMap()
   }, [dispatch])
   

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