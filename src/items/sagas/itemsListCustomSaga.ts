import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemActions, itemListActionTypes, ItemListsActions } from '../';
import { getActionTypes } from '../../common';

// const itemListsActionTypes = getActionTypes('ITEM_LIST');
const itemActionTypes = getActionTypes('ITEM');

function* editItemList(action) {
  try {
    const {
      payload: { item }
    } = action;

    yield put(ItemListsActions.itemEdited(item));
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* itemListEdited(action) {
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
    yield put(
      ItemListsActions.editItem({ ...previouslySelectedList, selected: undefined })
    );
  }
}

function* itemAdded() {
  const itemsLists = yield select((state) => state.itemsLists);
  const { collection: itemsListsCollection } = itemsLists;
  const { id: selectedListId } = itemsListsCollection.find((x) => x.selected) || {};

  console.log(itemsLists);

  if (selectedListId) {
    yield put(ItemActions.getItems({ listId: selectedListId }));
  }
}

function* itemListAdded(action) {
  const {
    payload: { newItem }
  } = action;

  console.log('saga', newItem);

  yield put(ItemListsActions.editItem({ ...newItem, selected: true }));
}

export default function* itemListsCustomSaga() {
  yield takeLatest(itemListActionTypes.EDIT, editItemList);
  yield takeLatest(itemListActionTypes.EDITED, itemListEdited);
  yield takeLatest(itemActionTypes.ADDED, itemAdded);
  yield takeLatest(itemListActionTypes.ADDED, itemListAdded);
  yield takeLatest('DESELECT', deselect);
}
