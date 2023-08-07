import { put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { actions as basketsActions } from '../../baskets';
import { actions as articlesActions } from '../../articles';
import { actionTypes } from '../actions/actions';

function* start() {
  try {
    const getBasketsAction = basketsActions.getItems();
    yield put(getBasketsAction);

    const getArticlesAction = articlesActions.getItems();
    yield put(getArticlesAction);
  } catch (e) {
    console.log('error on start application', e);
  }
}

function* appSaga() {
  yield takeLatest(actionTypes.START, start);
}

export default appSaga;
