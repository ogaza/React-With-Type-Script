import {
  actionsCreator,
  createApi,
  createListenersRegistrator,
  createReducer,
  getActionTypes
} from '../models/creators';
import { IItemsState } from './store/state';

// APIs
export const itemsApi = createApi('item');
export const itemListsApi = createApi('itemLists');

// actions
export const itemActionTypes = getActionTypes('ITEM');
export const ItemActions = actionsCreator('ITEM');
export const itemListActionTypes = getActionTypes('ITEM_LIST');
export const ItemListsActions = actionsCreator('ITEM_LIST');

// listeners
export const registerItemListeners = createListenersRegistrator('item', ItemActions);
export const registerItemListListeners = createListenersRegistrator('itemLists', ItemListsActions);

// reducers
const itemsInitialState = <IItemsState>{ collection: [] };
export const items = createReducer('ITEM', itemsInitialState);
const itemsListsInitialState = { collection: [] };
export const itemsLists = createReducer('ITEM_LIST', itemsListsInitialState);

// selected itemsList
const selectedItemListNamespace = 'SELECTED_ITEM_LIST';
export const selectedItemListActionTypes = getActionTypes(selectedItemListNamespace);
export const selectedItemListActions = actionsCreator('SELECTED_ITEM_LIST');
const selectedItemListInitialState = { collection: [] };
export const selectedItemList = createReducer('ITEM_LIST', selectedItemListInitialState);
