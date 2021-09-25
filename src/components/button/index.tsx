import React from 'react';

import {PaginationButton} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress(): void;
  arrowDirection: string;
}

export const Button = (props: Props) => {
  let icon;
  if (props.arrowDirection === 'right') {
    icon = <Icon name="arrow-left-thick" size={40} color="black" />;
  } else {
    icon = <Icon name="arrow-right-bold" size={40} color="black" />;
  }

  return <PaginationButton onPress={props.onPress}>{icon}</PaginationButton>;
};
