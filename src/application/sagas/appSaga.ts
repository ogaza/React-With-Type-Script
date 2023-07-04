import { put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  actions as basketsActions,
  actionTypes as basketsActionTypes
} from '../../baskets';
import { actionTypes } from '../actions/actions';

function* start() {
  try {
    const action = basketsActions.getItems();
    yield put(action);
  } catch (e) {
    console.log('error on start application', e);
  }
}

function* appSaga() {
  yield takeLatest(actionTypes.START, start);
}

export default appSaga;
