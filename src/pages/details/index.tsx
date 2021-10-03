import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {DetailsListContainer, DetailsTitle} from './styles';

import TitleComponent from '../../components/title';
import {Button} from '../../components/button';

import {characterListActions} from '../../redux/characters';

import {useNavigation} from '@react-navigation/native';
import {Props} from 'App';

const Detalhes = ({route}: Props) => {
  const charater = route.params.params;

  const dispatch = useDispatch();

  const navigateTo = useNavigation();

  useEffect(() => {
    dispatch(characterListActions.requestCharacters());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <DetailsListContainer>
        <DetailsTitle>{charater.name}</DetailsTitle>
        <TitleComponent text={charater.name} />

        <Text> {charater.gender} </Text>
        <Text> {charater.films} </Text>
      </DetailsListContainer>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => navigateTo.navigate('Home' as never)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#e5e5e5',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 3,
    backgroundColor: 'black',
  },
});

export default Detalhes;