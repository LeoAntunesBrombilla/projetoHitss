import {characterListActions} from '.';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as repository from './repository';
import {CharacterListTypes} from '../characters/types';

export function* requestCharacters(
  action: ReturnType<typeof characterListActions.requestCharacters>,
) {
  try {
    yield put(characterListActions.setError());

    const {count, next, previous, results}: repository.CharacterResponse =
      yield call(repository.requestCharacters, action.payload);

    if (results && next) {
      const previousPageNumber = previous?.replace(/\D/g, '') || '';
      const nextPageNumber = next.replace(/\D/g, '') || '';

      yield put(characterListActions.setCharacterLists(results));

      yield put(
        characterListActions.setPageInfo({
          previous: previousPageNumber,
          next: nextPageNumber,
          count,
        }),
      );
    }
  } catch (err: any) {
    yield put(characterListActions.setError(err.message));
  }
}

export default [
  takeLatest(CharacterListTypes.REQUEST_CHARACTERS, requestCharacters),
];
