import { all } from 'redux-saga/effects';
import toDosSaga from '../toDos/sagas/toDosSaga';

function* rootSaga() {
  yield all([toDosSaga()]);
}

export default rootSaga;
