import {
  IItemsState,
  IArticlesState,
  IBasketsState,
  IBasketItemsState
} from '../../items/store/state';

export interface IAppState {
  items: IItemsState;
  articles: IArticlesState;
  baskets: IBasketsState;
  basketItems: IBasketItemsState;
  itemsLists: any;
  articleLists: any;
}
