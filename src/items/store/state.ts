import { IItem } from '../models/item';
import { IArticle } from '../../articles/models/article';
import { IBasket } from '../../baskets/models/basket';

export interface IItemsState extends ICollectionState<IItem> {}
export interface IArticlesState extends ICollectionState<IArticle> {}
export interface IBasketsState extends ICollectionState<IBasket> {}

export interface ICollectionState<T> {
  collection: T[];
  state: State;
}

export interface IElement<T> {
  element: T;
  state: State;
}

export type State = 'LOADING' | 'LOADED';
