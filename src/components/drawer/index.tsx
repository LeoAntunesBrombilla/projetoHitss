import React from 'react';
import {Drawer as PaperDrawer} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface Props {
  onPress?: () => void;
  label: string;
  active?: boolean;
  icon?: IconSource;
}

const Drawer = (props: Props) => {
  const {onPress, label, active, icon} = props;

  return (
    <PaperDrawer.Item
      onPress={onPress}
      icon={icon}
      active={active}
      label={label}
    />
  );
};

export default Drawer;
