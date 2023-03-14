import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemListsActions, itemListsApi as api } from '../';
import { getActionTypes } from '../../models/creators';

const itemListsActionTypes = getActionTypes('ITEM_LIST');

function* get() {
  try {
    // yield delay(dalayInMs);

    yield call(api.get);
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* add(action) {
  try {
    // const items = yield select((store) => store.items);
    const { payload } = action;

    yield call(api.post, payload);
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* remove(action) {
  try {
    const {
      payload: { id }
    } = action;
    yield call(api.delete, id);
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* itemListsSaga() {
  yield takeLatest(itemListsActionTypes.GET, get);
  yield takeLatest(itemListsActionTypes.ADD, add);
  yield takeEvery(itemListsActionTypes.REMOVE, remove);
}

export default itemListsSaga;
