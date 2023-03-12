import { Actions } from '../../items/actions/actionCreators';

export function registerItemListeners(store, socket) {
  socket.on('item:get', (data) => {
    console.log('got item from socket connection: ', data);

    store.dispatch(Actions.setItems(data));
  });

  socket.on('item:delete', (data) => {
    const { itemId } = data;
    console.log('item deleted from socket connection: ', itemId);

    store.dispatch(Actions.itemDeleted(itemId));
  });
}
