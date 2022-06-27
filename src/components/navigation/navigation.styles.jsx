import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const LogoContainer = styled(Link)`
   height: 100%;
   display: flex;
   align-items: center;
   padding-left: 25px;
`

export const NavLinksContainer = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`

export const NavLink = styled(Link)`
   padding: 10px 15px;
   cursor: pointer;
   text-transform: uppercase;
`