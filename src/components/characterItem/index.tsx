import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Item, Container, IsFavoriteButton} from './styles';

interface Props {
  text: string;
  key: string;
  onPress: () => void;
}

const CharacterItem = (props: Props) => {
  return (
    <Container>
      <Item key={props.key}>{props.text}</Item>
      <IsFavoriteButton onPress={props.onPress}>
        {props ? (
          <Icon name="star-four-points" size={25} color="yellow" />
        ) : (
          <Icon name="star-four-points-outline" size={25} color="white" />
        )}
      </IsFavoriteButton>
    </Container>
  );
};

export default CharacterItem;
