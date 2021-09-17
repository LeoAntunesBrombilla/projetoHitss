import React from 'react';
import {Button} from './styles';

interface Props {
  onPress(): void;
  title: string;
}

export function PaginationButton(props: Props) {
  return <Button onPress={props.onPress} title={props.title} />;
}
