import React, {useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {characterListActions} from '../redux/characters';
import * as selectors from '../redux/characters/selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const next = useSelector(selectors.getNextPage);
  // const previous = useSelector(selectors.getPreviousPage);
  const testing = () => {
    console.warn(next);
    // console.warn(previous);
  };

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  return (
    <SafeAreaView>
      {charactersList.map(character => {
        return (
          <>
            <Text key={character.name}>{character.name}</Text>
          </>
        );
      })}
      <Button onPress={testing} title="Prox" />
    </SafeAreaView>
  );
};

export default Home;
