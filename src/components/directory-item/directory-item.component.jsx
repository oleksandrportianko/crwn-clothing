import React from 'react'

import { DirectoryitemContainer, BackgroundImage, DirectoryItemBody, Title, Label } from './directory-item.styles'

const DirectoryItem = ({category}) => {
   return (
      <DirectoryitemContainer>
         <BackgroundImage backgroundImage={`url(${category.imageUrl})`}  />
         <DirectoryItemBody>
            <Title>{category.title}</Title>
            <Label>Shop Now</Label>
         </DirectoryItemBody>
      </DirectoryitemContainer>
   )
}

export default DirectoryItem