// components =====================================================================

// hooks =====================================================================
import { useBasketItems } from './hooks/useBasketItems';
export { useBasketItems };

// export { useBasketItems };

// sagas =====================================================================
import saga from './sagas/basketItemsSaga';

export { saga as basketItemsSaga };
//============================================================================
// generate actions, api, reducer, socket listener

import { actionsCreator, getActionTypes } from '../common/actions/creators';
import { createApi } from '../common/api/creators';
import { createListenersRegistrator } from '../common/listeners/creators';
import { createReducer } from '../common/reducers/creators';

const namespace = 'basketItems';
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
