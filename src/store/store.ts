import { createStore } from 'redux';
import { todoApp} from'../reducers/reducers';

export const store = createStore(todoApp, {});