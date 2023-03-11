import { combineReducers } from 'redux';
import { items } from '../items/reducers/itemsReducer';

export const rootReducer = combineReducers({ items });
