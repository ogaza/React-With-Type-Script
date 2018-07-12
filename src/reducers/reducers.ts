import { IAction } from '../actions/iAction';
import { actionTypes } from '../actions/actionTypes';

export interface ITodo {
    id: number;
    text: string;
    isDone: boolean;
}

export interface ITodos {
    todos: ITodo[]
};

const todos = ( state: ITodos, action: IAction<ITodo> ): ITodos => {
    if(action.type = actionTypes.ADD_TODO) {
        return { 
            ...state,
            todos: [ ...state.todos, action.payload ]
        };
    }
    
    return state;
}