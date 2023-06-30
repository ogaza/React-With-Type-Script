import { useArticles } from './hooks/useArticles';
import { ArticlesPanel } from './components/ArticlesPanel';
import { ArticlesPanelContainer } from './components/ArticlesPanelContainer';

export { ArticlesPanel, ArticlesPanelContainer, useArticles };

//============================================================================
// generate namespace

import { actionsCreator, getActionTypes } from '../common/actions/creators';
import { createApi } from '../common/api/creators';
import { createListenersRegistrator } from '../common/listeners/creators';
import { createReducer } from '../common/reducers/creators';
// import { IItemsState } from './store/state';

const namespace = 'article';
const namespaceUpperCase = namespace.toUpperCase();
const listNamespace = `${namespace}Lists`;
const listNamespaceSneakUpperCase = `${namespaceUpperCase}_LIST`;
const selectedListNamespaceSneakUpperCase = `SELECTED_${namespaceUpperCase}_LIST`;

// APIs
export const api = createApi(namespace);
export const listsApi = createApi(listNamespace);

// actions
export const actionTypes = getActionTypes(namespaceUpperCase);
export const actions = actionsCreator(namespaceUpperCase);
export const listActionTypes = getActionTypes(listNamespaceSneakUpperCase);
export const listsActions = actionsCreator(listNamespaceSneakUpperCase);

// listeners
export const registerListeners = createListenersRegistrator(namespace, actions);
export const registerListListeners = createListenersRegistrator(
  listNamespace,
  listsActions
);

// reducers
const initialState = { collection: [] };
// const itemsInitialState = <IItemsState>{ collection: [] };
export const reducer = createReducer(namespaceUpperCase, initialState);
const listsInitialState = { collection: [] };
export const listsReducer = createReducer(
  listNamespaceSneakUpperCase,
  listsInitialState
);

// selected itemsList
export const selectedListActionTypes = getActionTypes(
  selectedListNamespaceSneakUpperCase
);
export const selectedListActions = actionsCreator(
  selectedListNamespaceSneakUpperCase
);
const selectedListInitialState = { collection: [] };
export const selectedItemList = createReducer(
  listNamespaceSneakUpperCase,
  selectedListInitialState
);
