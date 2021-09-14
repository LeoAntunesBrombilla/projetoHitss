import React, {useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  /*
  const previous = useSelector(selectors.getPreviousPage);
  const testing = () => {
    console.warn(next);
    // console.warn(previous);
  };
  */
  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  const proxPagina = () => {
    if (next) {
      dispatch(characterListActions.requestCharacters(next));
    }
    return null;
  };

  return (
    <SafeAreaView>
      {charactersList.map(character => {
        return (
          <>
            <Text key={character.name}>{character.name}</Text>
          </>
        );
      })}
      <Button onPress={proxPagina} title="Proxima Pagina" />
    </SafeAreaView>
  );
};

export default Home;
