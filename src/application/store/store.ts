import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';
import { logToElectronMiddleware } from '../../logger';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logToElectronMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;
