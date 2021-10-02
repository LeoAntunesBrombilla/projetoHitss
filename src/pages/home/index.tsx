import {StyleSheet, SafeAreaView, FlatList} from 'react-native';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TitleComponent from '../../components/title';
import CharacterItem from '../../components/characterItem';
import {Footer} from '../../components/footer';

import {Character} from '../../redux/characters/types';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  const previous = useSelector(selectors.getPreviousPage);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  const nextPage = () => {
    if (next) {
      dispatch(characterListActions.requestCharacters(next));
    }
    return null;
  };

  const previousPage = () => {
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

  const renderCharacters = ({item}: {item: Character}) => {
    return (
      <CharacterItem
        onPress={() => handleIsFavorite(item)}
        key={item.birth_year}
        text={item.name}
        onClick={() =>
          navigation.navigate('Detalhes' as never, {params: item} as never)
        }
      />
    );
  };

  const navigateToFavorite = (): void => {
    navigation.navigate('Favoritos' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleComponent text={'Lista dos Personagens'} />

      <FlatList
        data={charactersList}
        renderItem={renderCharacters}
        keyExtractor={item => item.name}
        nestedScrollEnabled
      />

      <Footer
        previousPage={previousPage}
        nextPage={nextPage}
        navigateToFavorite={navigateToFavorite}
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

export default Home;
