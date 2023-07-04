import { put, select, takeLatest } from 'redux-saga/effects';
import { actions, actionTypes } from '../';

function* selectFirstBasket(action) {
  const {
    payload: { items: baskets }
  } = action;
  const [firstBasket] = baskets;

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

function* itemEdited(action) {
  try {
    const {
      payload: {
        item: { id, selected }
      }
    } = action;

    if (!selected) return;

    yield put({ ...action, type: 'DESELECT' });
    yield put(actions.getItems({ listId: id }));
  } catch (e) {
    yield put(actions.operationFailure(e.message));
  }
}

function* deselect(action) {
  const {
    payload: { item }
  } = action;

  const { collection } = yield select((state) => state.baskets);

  const previouslySelectedList = collection.find(({ id, selected }) => {
    return id !== item.id && selected;
  });

  if (!!previouslySelectedList) {
    yield put(actions.editItem({ ...previouslySelectedList, selected: undefined }));
  }
}

function* itemAdded() {
  const basketsState = yield select((state) => state.baskets);
  const { collection: basketsCollection } = basketsState;
  const { id: selectedListId } = basketsCollection.find((x) => x.selected) || {};

  console.log(basketsState);

  if (selectedListId) {
    yield put(actions.getItems({ listId: selectedListId }));
  }
}

function* itemListAdded(action) {
  const {
    payload: { newItem }
  } = action;

  console.log('saga', newItem);

  yield put(actions.editItem({ ...newItem, selected: true }));
}

export default function* customSaga() {
  yield takeLatest(actionTypes.SET, selectFirstBasket);
  // yield takeLatest(actionTypes.EDIT, editItem);
  // yield takeLatest(actionTypes.EDITED, itemEdited);
  // yield takeLatest(actionTypes.ADDED, itemAdded);
  // yield takeLatest(actionTypes.ADDED, itemListAdded);
  // yield takeLatest('DESELECT', deselect);
}

/** 
 
    const response = yield take(basketsActionTypes.SET);

    const {
      payload: { items }
    } = response;
    const [{ id }] = items;

    yield selectBasket(id);

    function* selectBasket(id) {
  yield put(basketsActions.editItem({ id, selected: true }));
}
 * 
  */
