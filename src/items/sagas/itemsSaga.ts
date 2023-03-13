import { put, takeEvery, select, call, takeLatest, delay } from 'redux-saga/effects';
import { Actions } from '../../items/actions/actionCreators';
import { actionTypes } from '../actions/actionTypes';
import { itemsApi } from '../api/itemsApi';

function* getItems() {
  try {
    // yield delay(dalayInMs);

    yield call(itemsApi.get);
  } catch (e) {
    yield put(Actions.operationFailure(e.message));
  }
}
function* addItem(action) {
  try {
    // const items = yield select((store) => store.items);
    const { payload } = action;

    yield call(itemsApi.post, payload);
  } catch (e) {
    yield put(Actions.operationFailure(e.message));
  }
}

function* removeItem(action) {
  try {
    const {
      payload: { id }
    } = action;
    yield call(itemsApi.delete, id);
  } catch (e) {
    yield put(Actions.operationFailure(e.message));
  }
}

function* itemsSaga() {
  yield takeLatest(actionTypes.GET_ITEMS, getItems);
  yield takeLatest(actionTypes.ADD_ITEM, addItem);
  yield takeEvery(actionTypes.REMOVE_ITEM, removeItem);
}

const x = itemsSaga();

export default itemsSaga;
