import { all } from 'redux-saga/effects';
import itemsSaga from '../items/sagas/itemsSaga';
import itemListsSaga from '../items/sagas/itemListsSaga';
import itemListsCustomSaga from '../items/sagas/itemsListCustomSaga';
import appSaga from '../application/appSaga';

function* rootSaga() {
  yield all([appSaga(), itemsSaga(), itemListsSaga(), itemListsCustomSaga()]);
}

export default rootSaga;
