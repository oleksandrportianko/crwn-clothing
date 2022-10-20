import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
   }
`

export const LogoContainer = styled(Link)`
   height: 100%;
   display: flex;
   align-items: center;
   padding-left: 25px;

   @media screen and (max-width: 800px) {
      height: 50px;
      padding: 0px;
   }
`

export const NavLinksContainer = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   @media screen and (max-width: 800px) {
      width: 80%;
   }
`

export const NavLink = styled(Link)`
   padding: 10px 15px;
   cursor: pointer;
   text-transform: uppercase;
`