import {PersistState} from 'redux-persist';

import {CharacterListState} from '../characters/types';

import {initialAppState} from './initialAppState.mock';

export class AppStateMockBuilder {
  _persist: PersistState = initialAppState._persist;
  characterReducer: CharacterListState = initialAppState.characterReducer;

  withPersist(state: PersistState) {
    this._persist = state;
    return this;
  }

  withCharacter(state: CharacterListState) {
    this.characterReducer = state;
    return this;
  }

  build = () => {
    return {
      _persist: this._persist,
      characterReducer: this.characterReducer,
    };
  };
}
