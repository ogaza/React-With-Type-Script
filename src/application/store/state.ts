import { IItemsState, IArticlesState, IBasketsState } from '../../items/store/state';

export interface IAppState {
  items: IItemsState;
  articles: IArticlesState;
  baskets: IBasketsState;
  itemsLists: any;
  articleLists: any;
}
