import styled from 'styled-components'
import Button from '../button/Button'

export const CartDropdownContainer = styled.div`
   position: absolute;
   width: 250px;
   height: 340px;
   display: flex;
   flex-direction: column;
   padding: 15px 20px;
   border: 1px solid black;
   background-color: white;
   top: 50px;
   right: 40px;
   z-index: 5;
`

export const EmptyMessage = styled.div`
   font-size: 18px;
   margin: 50px auto;
` 

export const CartItems = styled.div`
   height: 250px;
   display: flex;
   flex-direction: column;
   overflow: auto;
`

export const ButtonContainer = styled(Button)`
   margin-top: auto;
`