import { IItemsState, IArticlessState } from '../../items/store/state';

export interface IAppState {
  items: IItemsState;
  articles: IArticlessState;
  itemsLists: any;
  articleLists: any;
}
