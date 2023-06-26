import { IItem } from '../models/item';

export interface IItemsState extends ICollectionState<IItem> {}

export interface ICollectionState<T> {
  collection: T[];
  state: State;
}

export interface IElement<T> {
  element: T;
  state: State;
}

export type State = 'LOADING' | 'LOADED';
