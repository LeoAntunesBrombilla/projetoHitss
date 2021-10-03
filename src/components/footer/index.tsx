import React from 'react';

import {FooterContainer} from './styles';
import {Button} from '../button';

interface Props {
  previousPage: () => void;
  nextPage: () => void;
  navigateTo: () => void;
  page?: string;
}

export const Footer = (props: Props) => {
  if (props.page === 'favorites') {
    return (
      <FooterContainer>
        <Button onPress={props.navigateTo} />
      </FooterContainer>
    );
  } else {
    return (
      <FooterContainer>
        <Button onPress={props.previousPage} icon={'left'} />
        <Button onPress={props.nextPage} icon={'right'} />
        <Button onPress={props.navigateTo} icon={'star-four-points'} />
      </FooterContainer>
    );
  }
};
