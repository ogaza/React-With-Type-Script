import { Actions } from '../../toDos/actions/actionCreators';

export function registerTodoListeners(store, socket) {
  socket.on('todo:get', (data) => {
    console.log('got todo from socket connection: ', data);

    store.dispatch(Actions.setTodos(data));
  });
}
