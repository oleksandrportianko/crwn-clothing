import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 900px;
   margin: 30px auto;

   @media screen and (max-width: 900px) {
      width: unset;
      flex-direction: column;
      align-items: center;
      margin: 30px 0px;
   }
`