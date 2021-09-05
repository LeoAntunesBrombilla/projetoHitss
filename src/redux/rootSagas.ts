import {all, takeLatest} from '@redux-saga/core/effects';
import {CharactersListType} from '../redux/characters/types';
import characterListSagas from './characters/sagas';

export function* rootSagas() {
  yield all(
    takeLatest[(CharactersListType.GET_CHARACTERS, characterListSagas)],
  );
}
