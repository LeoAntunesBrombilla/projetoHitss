import React from 'react';
import {Title} from './styles';

interface Props {
  text: string;
}

const TitleComponent = (props: Props) => {
  const {text} = props;
  return <Title>{text}</Title>;
};

export default TitleComponent;
