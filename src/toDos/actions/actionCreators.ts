import { actionTypes } from './actionTypes';

export const Actions = {
  setTodos: function (todos) {
    return {
      type: actionTypes.SET_TODOS,
      payload: todos
    };
  },

  addToDo: function (text) {
    return {
      type: actionTypes.ADD_TODO,
      payload: {
        text,
        completed: false
      }
    };
  },

  deleteToDo: function (id) {
    return {
      type: actionTypes.REMOVE_TODO,
      payload: {
        id
      }
    };
  }
};
