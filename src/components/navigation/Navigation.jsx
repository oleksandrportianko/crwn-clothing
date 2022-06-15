import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase'
import logoSvg from '../../assets/logo.svg'
import './Navigation.scss'

const Navigation = () => {
   const { currentUser, setCurrentUser } = useContext(UserContext)

   const signOutHandler = async () => {
      await signOutUser()
      setCurrentUser(null)
   }

   return (
      <Fragment>
         <div className='navigation'>
            <Link className='logo-container' to='/'>
               <img src={logoSvg} alt="" />
            </Link>
            <div className='nav-links-container'>
               <Link className='nav-link' to='/shop'>Shop</Link>
               {
                  currentUser ?
                     <span className='nav-link' onClick={signOutHandler}>Sign out</span>
                     :
                     <Link className='nav-link' to='/auth'>Sign in</Link>
               }
            </div>
         </div>
      </Fragment>
   )
}

export default Navigation