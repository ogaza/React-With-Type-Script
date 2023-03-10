import { put, takeEvery, select, call, takeLatest, delay } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
import { todoApi } from '../api/todoApi';

const dalayInMs = 500;

function* addToDo(action) {
  try {
    // const todos = yield select((store) => store.todos);
    const { payload } = action;

    yield delay(dalayInMs);

    yield call(todoApi.post, payload);
  } catch (e) {
    yield put({ type: 'ADD_TODO_FAILED', message: e.message });
  }
}

function* removeToDo(action) {
  try {
    const {
      payload: { id }
    } = action;
    yield delay(dalayInMs);
    yield call(todoApi.delete, id);
  } catch (e) {
    yield put({ type: 'REMOVE_TODO_FAILED', message: e.message });
  }
}

function* toDosSaga() {
  yield takeLatest(actionTypes.ADD_TODO, addToDo);
  yield takeEvery(actionTypes.REMOVE_TODO, removeToDo);
}

const x = toDosSaga();

export default toDosSaga;
