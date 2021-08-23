import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {People} from './interfaces';
import axios, {AxiosResponse} from 'axios';

const App = () => {
  const [peopleData, setPeopleData] = useState<People[]>([]);

  console.log('User data: ', peopleData);

  useEffect(() => {
    for (let i = 1; i <= 83; i++) {
      axios
        .get<People[]>(`https://swapi.dev/api/people/${i}`)
        .then((response: AxiosResponse) => {
          setPeopleData(response.data);
        })
        .catch(error => console.log(error));
    }
  }, []);

  return (
    <>
      <View>{console.warn(peopleData)}</View>
    </>
  );
};

export default App;
