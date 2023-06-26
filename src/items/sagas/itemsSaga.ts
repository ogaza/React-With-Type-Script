import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { itemsApi } from '../';
import { getActionTypes } from '../../common/actions/creators';
import { ItemActions } from '../../items';

const itemActionTypes = getActionTypes('ITEM');

function* getItems(action) {
  try {
    // yield delay(dalayInMs);
    const { payload } = action;
    yield call(itemsApi.get, payload);
  } catch (e) {
    yield put(ItemActions.operationFailure(e.message));
  }
}

function* addItem(action) {
  try {
    // const items = yield select((store) => store.items);
    const { payload } = action;

    yield call(itemsApi.post, payload);
  } catch (e) {
    yield put(ItemActions.operationFailure(e.message));
  }
}

function* removeItem(action) {
  try {
    const {
      payload: { id }
    } = action;
    yield call(itemsApi.delete, id);
  } catch (e) {
    yield put(ItemActions.operationFailure(e.message));
  }
}

function* itemsSaga() {
  yield takeLatest(itemActionTypes.GET, getItems);
  yield takeLatest(itemActionTypes.ADD, addItem);
  yield takeEvery(itemActionTypes.REMOVE, removeItem);
}

export default itemsSaga;
