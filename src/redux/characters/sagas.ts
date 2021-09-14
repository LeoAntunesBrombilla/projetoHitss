import {characterListActions} from '.';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as sagaApi from './repository';
import {CharacterListTypes} from '../characters/types';

export function* requestCharacters() {
  try {
    yield put(characterListActions.setError());

    const {count, next, previous, results}: sagaApi.CharacterResponse =
      yield call(sagaApi.requestCharacters);

    if (results && next) {
      let nextPageNumber = next.replace(/\D/g, '');
      yield put(characterListActions.setCharacterLists(results));
      yield put(
        characterListActions.setPageInfo({
          previous,
          next: nextPageNumber, //setar aqui!
          count,
        }),
      );
    }
  } catch (err) {
    yield put(characterListActions.setError(err.message));
  }
}

export default [
  takeLatest(CharacterListTypes.REQUEST_CHARACTERS, requestCharacters),
];
