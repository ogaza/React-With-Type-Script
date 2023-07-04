import { put, select, takeLatest } from 'redux-saga/effects';
import { actions, actionTypes } from '../';

function* selectFirstBasket(action) {
  const { collection: [firstBasket] = [] } = yield select(
    (state) => state.baskets
  ) || {};

  if (!firstBasket) {
    yield put(actions.addItem({}));

    return;
  }

  yield put(actions.editItem({ ...firstBasket, selected: true }));
}

function* editItem(action) {
  try {
    const {
      payload: { item }
    } = action;

    yield put(actions.itemEdited(item));
  } catch (e) {
    yield put(actions.operationFailure(e.message));
  }
}

function* selectAddedBasket(action) {
  const {
    payload: { newItem }
  } = action;

  console.log('saga', newItem);

  yield put(actions.editItem({ ...newItem, selected: true }));
}

export default function* customSaga() {
  yield takeLatest(actionTypes.SET, selectFirstBasket);
  yield takeLatest(actionTypes.EDIT, editItem);
  yield takeLatest(actionTypes.ADDED, selectAddedBasket);
  yield takeLatest(actionTypes.REMOVED, selectFirstBasket);
}
