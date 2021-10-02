import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TitleComponent from '../../components/title';
import CharacterItem from '../../components/characterItem';
import {Button} from '../../components/button';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

import {useNavigation} from '@react-navigation/native';

const Favoritos: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteCharactersList = useSelector(
    selectors.getFavoriteCharactersList,
  );

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <TitleComponent text={'Lista de personagens favoritos'} />
      <FlatList
        data={favoriteCharactersList}
        renderItem={({item}) => (
          <CharacterItem
            onPress={() => {}}
            key={item.birth_year}
            text={item.name}
            onClick={() => {}}
          />
        )}
        keyExtractor={item => item.name}
        nestedScrollEnabled
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={() => navigation.navigate('Home' as never)} />
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

export default Favoritos;
