import { actionTypes } from '../actions/actionTypes';

let id = 1;

export const Actions = {
  addToDo: (text: string) => ({
    type: actionTypes.ADD_TODO,
    payload: {
      id: id++,
      text,
      completed: false
    }
  }),
  showModal: () => ({
    type: actionTypes.SHOW_MODAL,
    payload: true
  }),
  hideModal: () => ({
    type: actionTypes.HIDE_MODAL,
    payload: false
  })
};