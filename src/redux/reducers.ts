import {combineReducers} from 'redux';

import characterReducer from './characters/reducer';

export const rootReducer = combineReducers({
  characterReducer,
});
