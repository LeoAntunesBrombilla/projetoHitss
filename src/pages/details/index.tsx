import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {characterListActions} from '../../redux/characters';

import {useNavigation} from '@react-navigation/native';
import {Props} from '../../../App';
import {Container} from '../../components/container/styles';
import {DetailInfo} from '../../components/detailsInfo';
import {Footer} from '../../components/footer';

const Detalhes = ({route}: Props) => {
  const charater = route.params.params;

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  const navigateToHome = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <Container>
      <DetailInfo
        name={charater.name}
        height={charater.height}
        mass={charater.mass}
        hair_color={charater.hair_color}
        birth_year={charater.birth_year}
        movies={charater.films}
      />
      <Footer
        navigateTo={navigateToHome}
        previousPage={() => undefined}
        nextPage={() => undefined}
        page={'favorites'}
      />
    </Container>
  );
};

export default Detalhes;
