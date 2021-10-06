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
    chosenIcon = (
      <Icon
        name="arrow-right-thick"
        size={40}
        color="white"
        testID="right-arrow"
      />
    );
  } else if (props.icon === 'left') {
    chosenIcon = (
      <Icon
        name="arrow-left-bold"
        size={40}
        color="white"
        testID="left-arrow"
      />
    );
  } else if (props.icon === 'star-four-points') {
    chosenIcon = (
      <Icon
        name="star-four-points"
        size={40}
        color="white"
        testID="favorite-icon"
      />
    );
  } else {
    chosenIcon = (
      <Icon name="home" size={40} color="white" testID="home-icon" />
    );
  }

  return (
    <PaginationButton onPress={props.onPress}>{chosenIcon}</PaginationButton>
  );
};
