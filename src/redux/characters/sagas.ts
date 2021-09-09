import {characterListActions} from '.';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as sagaApi from './repository';
import {CharacterListTypes} from '../characters/types';

export function* requestLists() {
  try {
    yield put(characterListActions.setError());

    // problema aqui! linha 18 no yield call
    /*
    'yield' expression implicitly results in an 
    'any' type because its containing generator 
    lacks a return-type annotation.
    */
    const {count, next, previous, results}: sagaApi.CharacterResponse =
      yield call(sagaApi.requestCharacters);

    if (results) {
      yield put(characterListActions.setCharacterLists(results));
      yield put(
        characterListActions.setPageInfo({
          previous,
          next, //setar aqui!
          count,
        }),
      );
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
