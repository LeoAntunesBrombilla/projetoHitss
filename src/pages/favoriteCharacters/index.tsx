import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CharacterItem from '../../components/characterItem';
import {CharactersList} from '../../components/charactersList';

import {Character} from '../../redux/characters/types';

import {characterListActions} from '../../redux/characters';
import * as selectors from '../../redux/characters/selectors';

import {useNavigation} from '@react-navigation/native';

import {Footer} from '../../components/footer';
import {Container} from '../../components/container/styles';
import TitleComponent from '../../components/title';

const Favoritos: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteCharactersList = useSelector(
    selectors.getFavoriteCharactersList,
  );

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  const renderCharacters = ({item}: {item: Character}) => {
    return (
      <CharacterItem
        key={item.name}
        text={item.name}
        page={'favorites'}
        onClick={() =>
          navigation.navigate('Detalhes' as never, {params: item} as never)
        }
      />
    );
  };

  const navigateToHome = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <Container>
      <TitleComponent text={'Lista de personagens favoritos'} />
      <CharactersList
        data={favoriteCharactersList}
        renderItem={renderCharacters}
        keyExtractor={item => item.name}
      />
      <Footer
        navigateTo={navigateToHome}
        previousPage={() => undefined}
        nextPage={() => undefined}
        page={'home'}
      />
    </Container>
  );
};

export default Favoritos;
