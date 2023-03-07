import { all } from 'redux-saga/effects';
import toDosSaga from '../toDos/sagas/toDos';

function* rootSaga() {
  yield all([toDosSaga()]);
}

export default rootSaga;
