import { actionTypes } from '_src/actions/actionTypes';
import { IAction } from '_src/actions/iAction';
import { ITodo } from '_src/reducers/reducers';

let id = 1;

export const Actions = {
    addToDo: (text: string) : IAction<ITodo> => <IAction<ITodo>> { 
        type: actionTypes.ADD_TODO,
        payload: <ITodo>{
            id: id++,
            text,
            completed: false
        }
    }
};