import styled from 'styled-components'
import Button from '../button/button.component'

export const ButtonContainer = styled(Button)`
   width: 80%;
   opacity: 0.7;
   position: absolute;
   top: 255px;
   display: none;

   @media screen and (max-width: 1100px) {
      padding: 0 10px 0 10px;
   }
`

export const ProductCardContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;

   &:hover {
      ${ButtonContainer} {
         opacity: 0.85;
         display: flex;
      }
   }

   @media screen and (max-width: 800px) {
      max-width: 300px;
      min-width: 150px;
   }
`

export const Image = styled.img`
   width: 100%;
   height: 95%;
   object-fit: cover;
   margin-bottom: 5px;

   &:hover {
      opacity: 0.8;
   }
`
 
export const Footer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`

export const Name = styled.span`
   width: 90%;
   margin-bottom: 15px;
`

export const Price = styled.span`
   width: 10%;
`