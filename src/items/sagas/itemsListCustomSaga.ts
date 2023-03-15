import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemActions, ItemListsActions } from '../';
import { getActionTypes } from '../../models/creators';

const itemListsActionTypes = getActionTypes('ITEM_LIST');

function* edit(action) {
  try {
    const {
      payload: { item }
    } = action;

    yield put(ItemListsActions.itemEdited(item));
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* edited(action) {
  try {
    const {
      payload: {
        item,
        item: { id, selected }
      }
    } = action;

    if (!selected) return;

    yield put({ ...action, type: 'DESELECT' });
    yield put(ItemActions.getItems({ listId: id }));
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* deselect(action) {
  const {
    payload: { item }
  } = action;

  const { collection } = yield select((state) => state.itemsLists);

  const previouslySelectedList = collection.find(({ id, selected }) => {
    return id !== item.id && selected;
  });

  if (!!previouslySelectedList) {
    yield put(ItemListsActions.editItem({ ...previouslySelectedList, selected: undefined }));
  }
}

export default function* itemListsCustomSaga() {
  yield takeLatest(itemListsActionTypes.EDIT, edit);
  yield takeLatest(itemListsActionTypes.EDITED, edited);
  yield takeLatest('DESELECT', deselect);
}
