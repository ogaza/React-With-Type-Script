import { all } from 'redux-saga/effects';
import itemsSaga from '../items/sagas/itemsSaga';
import itemListsSaga from '../items/sagas/itemListsSaga';
import appSaga from '../application/appSaga';

function* rootSaga() {
  yield all([appSaga(), itemsSaga(), itemListsSaga()]);
}

export default rootSaga;
