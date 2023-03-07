import { put, takeEvery, select, call } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
import { sendMessage } from '../../socket/socket';

function* removeToDo(action) {
  try {
    // const todos = yield select((store) => store.todos);
    yield call(sendMessage, 'example data');
  } catch (e) {
    yield put({ type: 'REMOVE_TODO_FAILED', message: e.message });
  }
}

function* toDosSaga() {
  yield takeEvery(actionTypes.REMOVE_TODO, removeToDo);
}

const x = toDosSaga();

export default toDosSaga;
