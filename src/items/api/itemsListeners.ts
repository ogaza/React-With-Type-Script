import { ItemActions } from '../../items';

export function registerItemListeners(store, socket) {
  socket.on('item:get', (data) => {
    console.log('got item from socket connection: ', data);

    store.dispatch(ItemActions.setItems(data));
  });

  socket.on('item:delete', (data) => {
    const { itemId } = data;
    console.log('item deleted from socket connection: ', itemId);

    store.dispatch(ItemActions.itemDeleted(itemId));
  });
}
