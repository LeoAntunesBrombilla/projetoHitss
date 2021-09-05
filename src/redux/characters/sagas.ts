import todoApi from '../../api';
import {CharactersListType} from '../characters/types';
import {put, call} from 'redux-saga/effects';

export default function* characterListSagas(action) {
  let jsonResponse = yield call(todoApi, action.payload);
  yield put({type: CharactersListType.GET_CHARACTERS, payload: jsonResponse});
}
