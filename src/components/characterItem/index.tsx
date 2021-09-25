import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Item, Container, IsFavoriteButton} from './styles';

interface Props {
  text: string;
  key: string;
  isFavorite: boolean;
  onPress: () => boolean;
}

const CharacterItem = (props: Props) => {
  return (
    <Container>
      <Item key={props.key}>{props.text}</Item>
      <IsFavoriteButton onPress={props.onPress}>
        {props.isFavorite ? (
          <Icon name="star-four-points" size={25} color="yellow" />
        ) : (
          <Icon name="star-four-points-outline" size={25} color="white" />
        )}
      </IsFavoriteButton>
    </Container>
  );
};

export default CharacterItem;