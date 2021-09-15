import {characterListActions} from '.';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as sagaApi from './repository';
import {CharacterListTypes} from '../characters/types';

export function* requestCharacters(
  action: ReturnType<typeof characterListActions.requestCharacters>,
) {
  try {
    yield put(characterListActions.setError());

    const {count, next, previous, results}: sagaApi.CharacterResponse =
      yield call(sagaApi.requestCharacters, action.payload);

    if (results && next) {
      const previousPageNumber = previous?.replace(/\D/g, '') || '';
      const nextPageNumber = next.replace(/\D/g, '') || '';
      yield put(characterListActions.setCharacterLists(results));
      yield call(sagaApi.requestCharacters);
      yield put(
        characterListActions.setPageInfo({
          previous: previousPageNumber,
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
