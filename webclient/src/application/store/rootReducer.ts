import { combineReducers } from 'redux';
import { adminPanel } from '../../adminPanel/reducer';
import { reducer as articles } from '../../articles';
import { reducer as baskets } from '../../baskets';
import { reducer as basketItems } from '../../basketItems';
import { items, itemsLists, selectedItemList } from '../../items';

export const rootReducer = combineReducers({
  adminPanel,
  articles,
  baskets,
  basketItems,
  items,
  itemsLists,
  selectedItemList
});
