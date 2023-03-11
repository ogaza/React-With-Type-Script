import { Actions } from '../../items/actions/actionCreators';

export function registerItemListeners(store, socket) {
  socket.on('item:get', (data) => {
    console.log('got item from socket connection: ', data);

    store.dispatch(Actions.setItems(data));
  });
}
