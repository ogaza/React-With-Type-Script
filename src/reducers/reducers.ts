import { combineReducers } from 'redux';
import { modal } from '../reducers/modalReducer';
import { todos } from '../reducers/todosReducer';

export const rootReducer = combineReducers({ todos, modal });
