import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TitleComponent from '../title';
import CharacterItem from '../characterItem';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteCharactersList = useSelector(
    selectors.getFavoriteCharactersList,
  );

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  const handleIsFavorite = (character: any) => {
    dispatch(
      characterListActions.setFavorite({
        Character: character,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleComponent text={'Lista de Personagens'} />
      <FlatList
        data={favoriteCharactersList}
        renderItem={({item}) => (
          <CharacterItem
            onPress={() => handleIsFavorite(item)}
            key={item.birth_year}
            text={item.name}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#e5e5e5',
  },
});

export default Favorites;
