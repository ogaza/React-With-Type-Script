import { ITodo } from '../../models/todo';
import { actionTypes } from '../actions/actionTypes';
import { ITodosState } from '../store/state';

const initialState = <ITodosState>{ collection: [] };

export const todos = (state: ITodosState = initialState, action): ITodosState => {
  if (action.type === actionTypes.SET_TODOS) {
    const {
      payload: { todos }
    } = action;
    return {
      collection: todos,
      state: 'LOADED'
    };
  }

  if (action.type === actionTypes.ADD_TODO) {
    const { payload: todo } = action;

    const placeholder: ITodo = {
      id: 0,
      ...todo
    };
    const newState = [...state.collection, placeholder];

    return {
      collection: newState,
      state: 'LOADING'
    };
  }

  if (action.type === actionTypes.REMOVE_TODO) {
    const {
      payload: { id }
    } = action;
    const { collection } = state;

    const todoToRemove = collection.find((x) => x.id === id);
    const idx = collection.findIndex((x) => x.id === id);

    collection.splice(idx, 1, { ...todoToRemove, id: 0 });
    const newTodos = collection;

    return {
      collection: newTodos,
      state: 'LOADING'
    };
  }

  return state;
};
