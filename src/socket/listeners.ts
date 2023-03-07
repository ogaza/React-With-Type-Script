import { Actions } from '../toDos/actions/actionCreators';

export function registerListeners(store, socket) {
  socket.on('msg:get', (data) => {
    console.log('got data from socket client: ', data);

    store.dispatch(Actions.addToDo('to do from socket'));
  });
}
