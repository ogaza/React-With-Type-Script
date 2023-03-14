import { combineReducers } from 'redux';
import { items, itemsLists } from '../items';

export const rootReducer = combineReducers({ items, itemsLists });
