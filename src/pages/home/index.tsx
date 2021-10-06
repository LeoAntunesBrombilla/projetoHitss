import React, {useEffect} from 'react';

import TitleComponent from '../../components/title';
import CharacterItem from '../../components/characterItem';
import {Footer} from '../../components/footer';
import {CharactersList} from '../../components/charactersList';
import {Container} from '../../components/container/styles';

import {Character} from '../../redux/characters/types';
import {characterListActions} from '../../redux/characters';

import {useDispatch, useSelector} from 'react-redux';
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

  const navigateToFavorite = (): void => {
    navigation.navigate('Favoritos' as never);
  };

  const renderCharacters = ({item}: {item: Character}) => {
    return (
      <CharacterItem
        onPress={() => handleIsFavorite(item)}
        key={item.name}
        text={item.name}
        onClick={() =>
          navigation.navigate('Detalhes' as never, {params: item} as never)
        }
      />
    );
  };

  return (
    <Container>
      <TitleComponent text={'Lista dos Personagens'} />

      <CharactersList
        data={charactersList}
        renderItem={renderCharacters}
        keyExtractor={item => item.name}
      />

      <Footer
        previousPage={previousPage}
        nextPage={nextPage}
        navigateTo={navigateToFavorite}
      />
    </Container>
  );
};

export default Home;
