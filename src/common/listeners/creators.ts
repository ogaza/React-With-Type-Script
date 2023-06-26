export function createListenersRegistrator(namespace, actions) {
  return function registerListeners(store, socket) {
    socket.on(`${namespace}:get`, (data) => {
      console.log(`got ${namespace} from socket connection: `, data);

      store.dispatch(actions.setItems(data));
    });

    socket.on(`${namespace}:post`, (data) => {
      console.log(`${namespace} added on the server: `, data);

      store.dispatch(actions.itemAdded(data));
    });

    socket.on(`${namespace}:delete`, (data) => {
      const { itemId } = data;
      console.log(`${namespace} deleted from socket connection: `, itemId);

      store.dispatch(actions.itemDeleted(itemId));
    });
  };
}
