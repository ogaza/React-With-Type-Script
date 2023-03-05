import { ITodo } from '../models/todo';

export interface ITodosState {
  todos: ITodo[];
}

export interface IModalState {
  isVisible: boolean;
}

export interface IAppState {
  todos: ITodosState;
  modal: IModalState;
}
