import {combineReducers} from 'redux';

import characterReducer from './characters/reducer';

export const rootReducer = combineReducers({
  characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
