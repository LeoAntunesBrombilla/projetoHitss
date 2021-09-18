import React from 'react';
import {Title as PaperTitle} from 'react-native-paper';

interface Props {
  text: string;
  alignCenter?: boolean;
}

const Title = (props: Props) => {
  const {text} = props;
  return <PaperTitle>{text}</PaperTitle>;
};

export default Title;
