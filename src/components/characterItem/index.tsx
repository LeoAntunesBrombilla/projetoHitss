import React from 'react';

import {Item, Container, IsFavoriteButton} from './styles';
import {Text} from 'react-native';

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
        <Text>Ola</Text>
      </IsFavoriteButton>
    </Container>
  );
};

export default CharacterItem;
