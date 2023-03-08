import { registerTodoListeners } from '../toDos/api/listeners';

export function registerListeners(store, socket) {
  registerTodoListeners(store, socket);
}
