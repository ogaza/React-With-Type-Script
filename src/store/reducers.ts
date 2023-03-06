import { combineReducers } from 'redux';
import { todos } from '../toDos/reducers/todosReducer';

export const rootReducer = combineReducers({ todos });
