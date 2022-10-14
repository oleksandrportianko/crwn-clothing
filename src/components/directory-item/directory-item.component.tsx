import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import { CategoryWithoutItems } from '../../types';

import { DirectoryitemContainer, BackgroundImage, DirectoryItemBody, Title, Label } from './directory-item.styles'

type DirectoryItemProps = {
   category: CategoryWithoutItems,
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
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