import React from 'react';

import {PaginationButton} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress(): void;
  icon?: string;
}

export const Button = (props: Props) => {
  let chosenIcon;
  if (props.icon === 'right') {
    chosenIcon = <Icon name="arrow-left-thick" size={40} color="black" />;
  } else if (props.icon === 'left') {
    chosenIcon = <Icon name="arrow-right-bold" size={40} color="black" />;
  } else {
    chosenIcon = <Icon name="star-four-points" size={40} color="black" />;
  }

  return (
    <PaginationButton onPress={props.onPress}>{chosenIcon}</PaginationButton>
  );
};
