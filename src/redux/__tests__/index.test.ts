import AsyncStorage from '@react-native-community/async-storage';
import * as redux from 'redux';
import * as reduxPersist from 'redux-persist';
import * as reduxSaga from 'redux-saga';

import {configureStore} from '@redux';

jest.mock('@react-native-community/async-storage', () => ({}));

import {rootReducer} from '../reducers';

describe('Fluxo da store', () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
});
