import { all } from 'redux-saga/effects';
import itemsSaga from '../items/sagas/itemsSaga';

function* rootSaga() {
  yield all([itemsSaga()]);
}

export default rootSaga;
