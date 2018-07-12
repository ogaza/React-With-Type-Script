import {actionTypes } from './actionTypes';
import { IAction } from './iAction';

export const Actions = {
    addToDo: (text: string) : IAction<string> => <IAction<string>> { 
        type: actionTypes.ADD_TODO,
        payload: text
    }
};