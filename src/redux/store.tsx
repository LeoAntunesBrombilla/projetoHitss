import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import {rootSagas} from './rootSagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(rootSagas);
  return {store};
};
