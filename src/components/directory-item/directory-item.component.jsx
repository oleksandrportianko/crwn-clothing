import React from 'react'
import { useNavigate } from 'react-router-dom';

import { DirectoryitemContainer, BackgroundImage, DirectoryItemBody, Title, Label } from './directory-item.styles'

const DirectoryItem = ({category}) => {
   const { imageUrl, title, route } = category;
   const navigate = useNavigate();

   const onNavigateHandler = () => {
      navigate(route)
   }

   return (
      <DirectoryitemContainer onClick={onNavigateHandler}>
         <BackgroundImage backgroundImage={`url(${imageUrl})`}  />
         <DirectoryItemBody>
            <Title>{title}</Title>
            <Label>Shop Now</Label>
         </DirectoryItemBody>
      </DirectoryitemContainer>
   )
}

export default DirectoryItem