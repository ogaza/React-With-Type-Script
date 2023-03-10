import { ITodo } from '../../models/todo';

export interface ITodosState extends ICollectionState<ITodo> {}

export interface ICollectionState<T> {
  collection: T[];
  state: State;
}

export interface IElement<T> {
  element: T;
  state: State;
}

export type State = 'LOADING' | 'LOADED';
