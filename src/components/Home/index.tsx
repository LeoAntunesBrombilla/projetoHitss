import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import PaperTitle from '../title/index';
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
            <Text key={character.birth_year}>{character.name}</Text>
          </>
        );
      })}
      <Button onPress={proxPagina} title="Proxima Pagina" />
      <Button onPress={prevPagina} title="Pagina Anterior" />
    </View>
  );
};

export default Home;
