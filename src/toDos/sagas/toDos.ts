import { put, takeEvery, select } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';

function* removeToDo(action) {
  try {
    const todos = yield select((store) => store.todos);
    console.log(todos);

    console.log(action);
  } catch (e) {
    yield put({ type: 'REMOVE_TODO_FAILED', message: e.message });
  }
}

function* toDosSaga() {
  yield takeEvery(actionTypes.REMOVE_TODO, removeToDo);
}

const x = toDosSaga();

export default toDosSaga;
