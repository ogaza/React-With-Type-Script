import { IItem } from '../models/item';
import { IArticle } from '../../articles/models/article';

export interface IItemsState extends ICollectionState<IItem> {}
export interface IArticlessState extends ICollectionState<IArticle> {}

export interface ICollectionState<T> {
  collection: T[];
  state: State;
}

export interface IElement<T> {
  element: T;
  state: State;
}

export type State = 'LOADING' | 'LOADED';
