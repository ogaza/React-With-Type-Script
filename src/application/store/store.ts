import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { logsSavingConfig, logToElectronMiddleware } from '../../logger';
import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const {
  minLogLevel,
  reduxActions: { storingEnabled, actionLogLevel }
} = logsSavingConfig;
const logToElectron = storingEnabled && actionLogLevel >= minLogLevel;

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = logToElectron
  ? applyMiddleware(sagaMiddleware, logToElectronMiddleware, logger)
  : applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, storeEnhancer);
sagaMiddleware.run(rootSaga);

export default store;
