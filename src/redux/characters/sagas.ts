import todoApi from './repository';
import {CharacterListTypes} from '../characters/types';
import {put, call} from 'redux-saga/effects';

export default function* characterListSagas(action): any {
  let jsonResponse = yield call(todoApi, action.payload);
  yield put({type: CharacterListTypes.REQUEST_LIST, payload: jsonResponse});
}
