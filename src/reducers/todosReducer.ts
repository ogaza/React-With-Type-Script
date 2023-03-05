import { actionTypes } from '../actions/actionTypes';
import { IAction } from '../actions/action';
import { ITodo } from '../models/todo';
import { ITodosState } from '../store/state';

const initialState = <ITodosState>{ todos: [] };

export const todos = (state: ITodosState = initialState, action: IAction<ITodo>): ITodosState => {
  if (action.type === actionTypes.ADD_TODO) {
    return {
      ...state,
      todos: [...state.todos, action.payload]
    };
  }

  return state;
};
