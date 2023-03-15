import { combineReducers } from 'redux';
import { items, itemsLists, selectedItemList } from '../items';

export const rootReducer = combineReducers({ items, itemsLists, selectedItemList });
