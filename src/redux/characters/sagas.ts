import {characterListActions} from '.';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as sagaApi from './repository';
import {CharacterListTypes} from '../characters/types';

//TODO Make saga createList

export function* requestLists() {
  try {
    yield put(characterListActions.setError());

    // problema aqui! linha 18 no yield call
    /*
    'yield' expression implicitly results in an 
    'any' type because its containing generator 
    lacks a return-type annotation.
    */
    const serverCharacterLists = yield call(sagaApi.requestLists);

    if (serverCharacterLists) {
      yield put(characterListActions.setCharacterLists(serverCharacterLists));
    }
  } catch (err) {
    /* 
    problema aqui também (linha 28) mesmo eu colocando
    tipo unknown ele reclama q err.message é tipo unknown kkk
    */
    yield put(characterListActions.setError(err.message));
  }
}

export default [takeLatest(CharacterListTypes.REQUEST_LIST, requestLists)];
