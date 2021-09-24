import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TitleComponent from '../title';
import CharacterItem from '../characterItem';
import {Button} from '../button';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  const previous = useSelector(selectors.getPreviousPage);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleIsFavorite = (): boolean => {
    setIsFavorite(!isFavorite);
    return isFavorite;
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <TitleComponent text={'Lista de Personagens'} />
      <FlatList
        data={charactersList}
        renderItem={({item}) => (
          <CharacterItem
            onPress={handleIsFavorite}
            key={item.birth_year}
            text={item.name}
            isFavorite={isFavorite}
          />
        )}
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={prevPagina} title={'Página Anterior'} />
        <Button onPress={proxPagina} title="Página Seguinte" />
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
