import { combineReducers } from 'redux';
import { actionTypes } from '../actions/actionTypes';
import { IAction } from '_src/actions/iAction';

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
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

export const todoApp = combineReducers({todos});