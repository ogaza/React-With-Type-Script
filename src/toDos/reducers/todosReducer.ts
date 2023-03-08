import { actionTypes } from '../actions/actionTypes';
import { ITodosState } from '../store/state';

const initialState = <ITodosState>{ todos: [] };

export const todos = (state: ITodosState = initialState, action): ITodosState => {
  if (action.type === actionTypes.SET_TODOS) {
    const {
      payload: { todos }
    } = action;
    return {
      todos: todos
    };
  }

  if (action.type === actionTypes.ADD_TODO) {
    const { payload: todo } = action;

    const newState = [...state.todos, todo];

    return {
      ...state,
      todos: newState
    };
  }

  if (action.type === actionTypes.REMOVE_TODO) {
    const {
      payload: { id }
    } = action;
    const { todos } = state;

    const newTodos = [...todos.filter((x) => x.id !== id)];

    return {
      ...state,
      todos: newTodos
    };
  }

  return state;
};
