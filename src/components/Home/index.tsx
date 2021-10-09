import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PaperTitle from '../title/';
import {Button} from '../button/';
import {useDispatch, useSelector} from 'react-redux';
import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

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
    <View>
      <PaperTitle text={'Lista de Personagens'} alignCenter={true} />
      {charactersList.map(character => {
        return (
          <>
            <Text key={character.birth_year}> {character.name} </Text>
          </>
        );
      })}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={prevPagina}
            title={'Página Anterior'}
            color={'black'}
          />
          <Button onPress={proxPagina} title="Página Seguinte" />
        </View>

        {/*
          <Button onPress={prevPagina} title={'Pagina Anterior'} />
          <Button onPress={proxPagina} label={'Proxima Pagina'} />
          */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export default Home;
