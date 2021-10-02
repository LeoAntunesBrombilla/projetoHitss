import React from 'react';

import {Provider} from 'react-redux';
import {configureStore} from './src/redux';

import Home from './src/pages/Home';
import Favoritos from './src/pages/favoriteCharactersList';
import Detalhes from './src/pages/detalhes';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Character} from './src/redux/characters/types';

const {store} = configureStore();

const RootStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Detalhes: {params: Character};
  Favoritos: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Favoritos" component={Favoritos} />
          <RootStack.Screen name="Detalhes" component={Detalhes} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
