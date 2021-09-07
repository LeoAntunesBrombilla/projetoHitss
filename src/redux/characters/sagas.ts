import {characterListActions} from '.';
import {takeLatest, put, call} from 'redux-saga/effects';
import todoApi from './repository';
import {CharacterListTypes} from '../characters/types';

export function* requestLists() {
  try {
    yield put(characterListActions.setError());

    const serverCharacterLists = yield call(todoApi.requestLists);

    if (serverCharacterLists) {
      yield put(characterListActions.setCharacterLists(serverCharacterLists));
    }
  } catch (err: unknown) {
    yield put(characterListActions.setError(err.message));
  }
}

export default [takeLatest(CharacterListTypes.REQUEST_LIST, requestLists)];
