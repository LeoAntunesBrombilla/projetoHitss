import React, {useEffect} from 'react';
import {View} from 'react-native';
import PaperTitle from '../title/index';
import PaperButton from '../button/index';
import PaperDrawer from '../drawer/index';
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
            <PaperDrawer key={character.birth_year} label={character.name} />
          </>
        );
      })}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <PaperButton onPress={prevPagina} title={'Pagina Anterior'} />
        <PaperButton onPress={proxPagina} title={'Proxima Pagina'} />
      </View>
    </View>
  );
};

export default Home;