import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Home from './src/containers/Home';
import {configureStore} from './src/redux';

const {store} = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

/*
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {People, Peoples} from './interfaces';
import axios, {AxiosResponse} from 'axios';

const App = () => {
  const [arrPeoples] = useState<People[]>([]);
  // const arrPeoples: Peoples[] = [];

  const example = {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/',
  };

  useEffect(() => {
    axios
      .get<People[]>(`https://swapi.dev/api/people/1`)
      .then((response: AxiosResponse) => {
        arrPeoples.push(response.data);
        console.warn(arrPeoples);
      })
      .catch(error => console.log(error));
  }, []); //falta dependencia do useEffect!

  console.warn(arrPeoples);

  return (
    <>
      <View>
        {arrPeoples.map(people => (
          <Text>{people.name}</Text>
        ))}
      </View>
    </>
  );
};

export default App;
*/
