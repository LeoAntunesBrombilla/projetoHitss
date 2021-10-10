import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {Item, Container, IsFavoriteButton, DetailsButton} from './styles';

interface Props {
  text: string;
  onPress?: () => void;
  onClick?: (item: any) => void;
  page?: string;
}

const CharacterItem = (props: Props) => {
  return (
    <Container>
      {props.page === 'favorites' ? (
        <>
          <Item width={'85%'}>{props.text}</Item>
          <DetailsButton onPress={props.onClick} testID="details-button">
            <IconEntypo name="magnifying-glass" size={25} color="white" />
          </DetailsButton>
        </>
      ) : (
        <>
          <Item width={'75%'}>{props.text}</Item>
          <IsFavoriteButton testID="favorite-button" onPress={props.onPress}>
            <Icon name="star-four-points" size={25} color="white" />
          </IsFavoriteButton>
          <DetailsButton onPress={props.onClick}>
            <IconEntypo name="magnifying-glass" size={25} color="white" />
          </DetailsButton>
        </>
      )}
    </Container>
  );
};

export default CharacterItem;
