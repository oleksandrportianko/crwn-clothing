import styled from 'styled-components'

export const CategoryContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   row-gap: 50px;
   column-gap: 20px;
`

export const CategoryTitle = styled.h2`
   text-align: center;
   font-size: 35px;
   margin-bottom: 25px;
   text-transform: uppercase;
`