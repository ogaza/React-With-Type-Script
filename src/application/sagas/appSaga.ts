import { put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemListsActions, itemListActionTypes } from '../../items';
import { actionTypes } from '../actions/actions';
// import { getActionTypes } from '../models/creators';

function* start() {
  try {
    const action = ItemListsActions.getItems();

    yield put(action);

    const response = yield take(itemListActionTypes.SET);

    const {
      payload: { items }
    } = response;
    const [{ id }] = items;

    yield selectList(id);
  } catch (e) {
    console.log('error on start application', e);
  }
}

function* selectList(id) {
  yield put(ItemListsActions.editItem({ id, selected: true }));
}

function* appSaga() {
  yield takeLatest(actionTypes.START, start);
}

export default appSaga;
