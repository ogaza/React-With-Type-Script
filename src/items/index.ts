import {
  actionsCreator,
  createApi,
  createListenersRegistrator,
  createReducer
} from '../models/creators';
import { IItemsState } from './store/state';

// APIs
export const itemsApi = createApi('item');
export const itemListsApi = createApi('itemLists');

// actions
export const ItemActions = actionsCreator('ITEM');
export const ItemListsActions = actionsCreator('ITEM_LIST');

// listeners
export const registerItemListeners = createListenersRegistrator('item', ItemActions);
export const registerItemListListeners = createListenersRegistrator('itemLists', ItemListsActions);

// reducers
const itemsInitialState = <IItemsState>{ collection: [] };
export const items = createReducer('ITEM', itemsInitialState);
const itemsListsInitialState = { collection: [] };
export const itemsLists = createReducer('ITEM_LIST', itemsListsInitialState);
