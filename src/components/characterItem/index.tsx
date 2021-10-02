import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {Item, Container, IsFavoriteButton, DetailsButton} from './styles';

interface Props {
  text: string;
  key: string;
  onPress: () => void;
  onClick: () => void;
}

const CharacterItem = (props: Props) => {
  return (
    <Container>
      <Item key={props.key}>{props.text}</Item>
      <IsFavoriteButton onPress={props.onPress}>
        <Icon name="star-four-points" size={25} color="white" />
      </IsFavoriteButton>
      <DetailsButton onPress={props.onClick}>
        <IconEntypo name="magnifying-glass" size={25} color="white" />
      </DetailsButton>
    </Container>
  );
};

export default CharacterItem;
