import React from 'react';
import {ButtonProps, PaginationButton} from './styles';

interface Props extends ButtonProps {
  onPress(): void;
  title: string;
}

export const Button = (props: Props) => {
  return (
    <PaginationButton
      color={props.color}
      onPress={props.onPress}
      title={props.title}
      textAling={props.textAling || 'center'}
      borderRadius={props.borderRadius}
    />
  );
};
