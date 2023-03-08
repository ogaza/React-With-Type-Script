import { put, takeEvery, select, call } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
// import { sendMessage } from '../../socket/socket';
import { todoApi } from '../api/todoApi';

function* addToDo(action) {
  try {
    // const todos = yield select((store) => store.todos);
    const { payload } = action;
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
    yield call(todoApi.delete, id);
  } catch (e) {
    yield put({ type: 'REMOVE_TODO_FAILED', message: e.message });
  }
}

function* toDosSaga() {
  yield takeEvery(actionTypes.ADD_TODO, addToDo);
  yield takeEvery(actionTypes.REMOVE_TODO, removeToDo);
}

const x = toDosSaga();

export default toDosSaga;
