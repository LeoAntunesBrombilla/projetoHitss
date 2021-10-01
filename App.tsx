import React from 'react';

import {Provider} from 'react-redux';
import {configureStore} from './src/redux';

import Home from './src/components/Home';
import Favorites from './src/components/favoriteCharactersList';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {store} = configureStore();

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
