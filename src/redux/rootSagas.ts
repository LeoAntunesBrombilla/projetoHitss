import {all} from '@redux-saga/core/effects';

import sagas from './characters/sagas';

export function* rootSagas() {
  yield all([...sagas]);
}
