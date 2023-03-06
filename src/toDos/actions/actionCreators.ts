import { actionTypes } from './actionTypes';

let id = 1;

export const Actions = {
  addToDo: (text) => ({
    type: actionTypes.ADD_TODO,
    payload: {
      id: id++,
      text,
      completed: false
    }
  }),

  deleteToDo: (id) => ({
    type: actionTypes.REMOVE_TODO,
    payload: {
      id
    }
  })
};
