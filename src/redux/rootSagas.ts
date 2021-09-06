import {all, takeLatest} from '@redux-saga/core/effects';
import {CharactersListTypes} from '../redux/characters/types';
import characterListSagas from './characters/sagas';

export function* rootSagas() {
  yield all(
    takeLatest[(CharactersListTypes.GET_CHARACTERS, characterListSagas)],
  );
}
