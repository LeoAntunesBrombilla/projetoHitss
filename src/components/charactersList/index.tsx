import React from 'react';

import {FlatList, ListRenderItem} from 'react-native';
import {Character} from '../../redux/characters/types';

interface Props {
  data: any;
  renderItem: ListRenderItem<Character> | null | undefined;
  keyExtractor?: ((item: Character, index: number) => string) | undefined;
}

export const CharactersList = (props: Props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={props.renderItem}
      keyExtractor={props.keyExtractor}
      nestedScrollEnabled
      testID="characters-list"
    />
  );
};
