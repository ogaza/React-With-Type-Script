import { createStore } from 'redux';
import { todoApp} from'_src/reducers/reducers';

export const store = createStore(todoApp, {});