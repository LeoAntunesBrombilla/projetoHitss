import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import PaperTitle from '../title/index';
import {Button} from '../button/index';
import {useDispatch, useSelector} from 'react-redux';
import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

//TODO remover todos os imports de react-native-paper em seguida remover do projeto

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  const previous = useSelector(selectors.getPreviousPage);

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
      <PaperTitle text={'Lista de Personagens'} />
      <FlatList
        data={charactersList}
        renderItem={({item}) => (
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: '700',
              padding: 10,
            }}
            key={item.birth_year}>
            {item.name}
          </Text>
        )}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsContainer}>
          <Button onPress={prevPagina} title={'Página Anterior'} />
          <Button onPress={proxPagina} title="Página Seguinte" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 2,
  },
});

export default Home;
