import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemActions, ItemListsActions } from '../';
import { getActionTypes } from '../../models/creators';

const itemListsActionTypes = getActionTypes('ITEM_LIST');

function* edit(action) {
  try {
    const {
      payload: { item }
    } = action;
    console.log(item);

    yield put(ItemListsActions.itemEdited(item));
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* edited(action) {
  try {
    const {
      payload: {
        item: { id }
      }
    } = action;

    yield put(ItemActions.getItems({ listId: id }));
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

export default function* itemListsCustomSaga() {
  yield takeLatest(itemListsActionTypes.EDIT, edit);
  yield takeLatest(itemListsActionTypes.EDITED, edited);
}
