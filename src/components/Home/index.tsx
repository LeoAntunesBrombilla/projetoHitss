import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import PaperTitle from '../title/index';
import {PaginationButton} from '../button/index';
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
        <PaginationButton onPress={proxPagina} title="Proxima Pagina" />
        <PaginationButton onPress={prevPagina} title="Prev Pagina" />

        {/*
          <Button onPress={prevPagina} title={'Pagina Anterior'} />
          <Button onPress={proxPagina} label={'Proxima Pagina'} />
          */}
      </View>
    </View>
  );
};

export default Home;
