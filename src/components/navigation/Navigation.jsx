import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
   return (
      <Fragment>
         <div className='logo-container'>
         <Link to='/'>LOGO</Link>
         </div>
         <div className='mav-links-container'>
            <Link to='/shop'>Shop</Link>
         </div>
      </Fragment>
   )
}

export default Navigation