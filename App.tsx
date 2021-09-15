import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Home from './src/components/Home';
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
