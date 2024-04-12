import { all } from 'redux-saga/effects';
// import itemsSaga from '../../items/sagas/itemsSaga';
import articlesSaga from '../../articles/sagas/articlesSaga';
import { basketItemsSaga } from '../../basketItems';
import { basketsSaga, customBasketsSaga } from '../../baskets';
// import itemListsSaga from '../../items/sagas/itemListsSaga';
// import itemListsCustomSaga from '../../items/sagas/itemsListCustomSaga';
import appSaga from '../../application/sagas/appSaga';

function* rootSaga() {
  yield all([
    appSaga(),
    articlesSaga(),
    basketsSaga(),
    basketItemsSaga(),
    customBasketsSaga()
    // itemsSaga(),
    // itemListsSaga(),
    // itemListsCustomSaga()
  ]);
}

export default rootSaga;
