// components =====================================================================
import { BasketsPanelContainer } from './components/BasketsPanelContainer';

export { BasketsPanelContainer };

// hooks =====================================================================
export { useBaskets } from './hooks/useBaskets';

// sagas =====================================================================
import customSaga from './sagas/basketsCustomSaga';
import saga from './sagas/basketsSaga';

export { saga as basketsSaga, customSaga as customBasketsSaga };
//============================================================================
// generate actions, api, reducer, socket listener

import { actionsCreator, getActionTypes } from '../common/actions/creators';
import { createApi } from '../common/api/creators';
import { createListenersRegistrator } from '../common/listeners/creators';
import { createReducer } from '../common/reducers/creators';

const namespace = 'baskets';
const namespaceUpperCase = namespace.toUpperCase();

// API
export const api = createApi(namespace);

// actions
export const actionTypes = getActionTypes(namespaceUpperCase);
export const actions = actionsCreator(namespaceUpperCase);

// listeners
export const registerListeners = createListenersRegistrator(namespace, actions);

// reducers
const initialState = { collection: [] };
export const reducer = createReducer(namespaceUpperCase, initialState);
