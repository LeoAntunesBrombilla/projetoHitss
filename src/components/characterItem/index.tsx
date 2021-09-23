import React from 'react';

import {Item, Container} from './styles';

interface Props {
  text: string;
  key: string;
}

const CharacterItem = (props: Props) => {
  return (
    <Container>
      <Item key={props.key}>{props.text}</Item>
    </Container>
  );
};

export default CharacterItem;
