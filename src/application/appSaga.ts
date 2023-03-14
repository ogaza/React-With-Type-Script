import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemActions, ItemListsActions, itemsApi } from '../items';
import { actionTypes } from './actions';
// import { getActionTypes } from '../models/creators';

function* start() {
  try {
    const action = ItemListsActions.getItems();

    yield put(action);
    // yield put(ItemActions.getItems());
  } catch (e) {
    console.log('error on start application', e);
  }
}

function* appSaga() {
  yield takeLatest(actionTypes.START, start);
  //   yield takeLatest(itemActionTypes.GET, getItems);
  //   yield takeLatest(itemActionTypes.ADD, addItem);
  //   yield takeEvery(itemActionTypes.REMOVE, removeItem);
}

export default appSaga;
