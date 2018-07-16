import { actionTypes } from '../actions/actionTypes';
import { IAction } from '../actions/action';
import { ITodo } from '../models/todo';

let id = 1;

export const Actions = {
  addToDo: (text: string): IAction<ITodo> => <IAction<ITodo>>{
    type: actionTypes.ADD_TODO,
    payload: <ITodo>{
      id: id++,
      text,
      completed: false
    }
  },
  showModal: (): IAction<boolean> => <IAction<boolean>>{
    type: actionTypes.SHOW_MODAL,
    payload: true
  },
  hideModal: (): IAction<boolean> => <IAction<boolean>>{
    type: actionTypes.HIDE_MODAL,
    payload: false
  }
};