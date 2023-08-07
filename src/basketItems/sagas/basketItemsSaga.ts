import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { api, actionTypes, actions } from '../';

function* getItems(action) {
  try {
    const { payload } = action;
    yield call(api.get, payload);
  } catch (e) {
    yield put(actions.operationFailure(e.message));
  }
}

function* addItem(action) {
  try {
    const { payload } = action;

    yield call(api.post, payload);
  } catch (e) {
    yield put(actions.operationFailure(e.message));
  }
}

function* editBasketItem(action) {
  try {
    const {
      payload: { item }
    } = action;

    yield call(api.update, item);
  } catch (e) {
    yield put(actions.operationFailure(e.message));
  }
}

function* removeItem(action) {
  try {
    const {
      payload: { id }
    } = action;
    yield call(api.delete, id);
  } catch (e) {
    yield put(actions.operationFailure(e.message));
  }
}

function* saga() {
  yield takeLatest(actionTypes.GET, getItems);
  yield takeLatest(actionTypes.ADD, addItem);
  yield takeLatest(actionTypes.EDIT, editBasketItem);
  yield takeEvery(actionTypes.REMOVE, removeItem);
}

export default saga;
