import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ItemListsActions, itemListsApi as api } from '../';
import { getActionTypes } from '../../common/actions/creators';

const itemListsActionTypes = getActionTypes('ITEM_LIST');

function* get() {
  try {
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

function* removed(action) {
  try {
    const {
      payload: { id }
    } = action;

    const itemsLists = yield select((state) => state.itemsLists);
    const { collection: itemsListsCollection } = itemsLists;

    const [firstList] = itemsListsCollection;

    console.log(itemsListsCollection);
    console.log('first list: ', firstList);

    if (!!firstList) {
      yield put(ItemListsActions.editItem({ ...firstList, selected: true }));
      return;
    }

    yield put(ItemListsActions.addItem({}));
  } catch (e) {
    yield put(ItemListsActions.operationFailure(e.message));
  }
}

function* itemListsSaga() {
  yield takeLatest(itemListsActionTypes.GET, get);
  yield takeLatest(itemListsActionTypes.ADD, add);
  yield takeEvery(itemListsActionTypes.REMOVE, remove);
  yield takeEvery(itemListsActionTypes.REMOVED, removed);
}

export default itemListsSaga;
