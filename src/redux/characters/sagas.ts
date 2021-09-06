import todoApi from './repository';
import {CharactersListTypes} from '../characters/types';
import {put, call} from 'redux-saga/effects';

export default function* characterListSagas(action): any {
  let jsonResponse = yield call(todoApi, action.payload);
  yield put({type: CharactersListTypes.GET_CHARACTERS, payload: jsonResponse});
}
