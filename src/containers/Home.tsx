import React, {useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {characterListActions} from '../redux/characters';
import * as selectors from '../redux/characters/selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(selectors.getCharacterList);
  const nextPage = useSelector(selectors.getNextPage);
  const seeNextPage = () => {
    console.warn(nextPage);
  };

  useEffect(() => {
    dispatch(characterListActions.requestList());
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
      <Button onPress={seeNextPage} title="Prox" />
    </SafeAreaView>
  );
};

export default Home;
