import { combineReducers } from 'redux';
import { adminPanel } from '../../adminPanel/reducer';
import { reducer as articles } from '../../articles';
import { items, itemsLists, selectedItemList } from '../../items';

export const rootReducer = combineReducers({
  articles,
  items,
  itemsLists,
  selectedItemList,
  adminPanel
});
