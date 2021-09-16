import React from 'react';
import {Button as PaperButton} from 'react-native-paper';

interface Props {
  onPress: () => void;
  title: string;
  icon?: string;
  uppercase?: boolean;
}

const Button = (props: Props) => {
  const {onPress, title, icon, uppercase} = props;

  return (
    <PaperButton onPress={onPress} icon={icon}>
      {uppercase ? title.toLocaleUpperCase() : title}
    </PaperButton>
  );
};

export default Button;
