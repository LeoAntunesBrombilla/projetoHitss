import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TitleComponent from '../title';
import CharacterItem from '../characterItem';
import {Button} from '../button';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

import {useNavigation} from '@react-navigation/native';

const Home: React.FC = ({screenName}) => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  const previous = useSelector(selectors.getPreviousPage);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  const proxPagina = () => {
    if (next) {
      dispatch(characterListActions.requestCharacters(next));
    }
    return null;
  };

  const prevPagina = () => {
    if (previous) {
      dispatch(characterListActions.requestCharacters(previous));
    }
  };

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
        data={charactersList}
        renderItem={({item}) => (
          <CharacterItem
            onPress={() => handleIsFavorite(item)}
            key={item.birth_year}
            text={item.name}
          />
        )}
      />

      <View style={styles.buttonsContainer}>
        <Button onPress={prevPagina} icon={'right'} />
        <Button onPress={proxPagina} icon={'left'} />
        <Button onPress={() => navigation.navigate('Favorites')} />
      </View>
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
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 2,
    marginBottom: '10%',
  },
});

export default Home;
