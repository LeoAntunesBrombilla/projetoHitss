import React from 'react';

import {FooterContainer} from './styles';
import {Button} from '../button';

interface Props {
  previousPage: () => void;
  nextPage: () => void;
  navigateToFavorite: () => void;
}

export const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <Button onPress={props.previousPage} icon={'right'} />
      <Button onPress={props.nextPage} icon={'left'} />
      <Button onPress={props.navigateToFavorite} />
    </FooterContainer>
  );
};
