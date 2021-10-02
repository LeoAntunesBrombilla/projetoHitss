import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TitleComponent from '../title';
import CharacterItem from '../characterItem';
import {Button} from '../button';

import {Character} from '../../redux/characters/types';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  const previous = useSelector(selectors.getPreviousPage);
  const favoriteCharacters = useSelector(selectors.getFavoriteCharactersList);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TitleComponent text={'Lista de Personagens'} />
        <TitleComponent text={`${favoriteCharacters.length}`} />

        <FlatList
          data={charactersList}
          renderItem={renderCharacters}
          keyExtractor={item => item.name}
          nestedScrollEnabled
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button onPress={prevPagina} icon={'right'} />
        <Button onPress={proxPagina} icon={'left'} />
        <Button onPress={() => navigation.navigate('Favorites' as never)} />
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
    padding: 3,
    backgroundColor: 'black',
  },
});

export default Home;
