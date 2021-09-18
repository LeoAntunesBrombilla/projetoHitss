import React from 'react';
import {ButtonProps, PaginationButton} from './styles';

interface Props extends ButtonProps {
  onPress(): void;
  title: string;
}

export const Button = (props: Props) => {
  return (
    <PaginationButton
      color={'black'}
      onPress={props.onPress}
      title={props.title}
      textAling={'center'}
      borderRadius={props.borderRadius}
    />
  );
};
