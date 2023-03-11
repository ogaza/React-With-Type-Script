import { registerItemListeners } from '../items/api/itemsListeners';

export function registerListeners(store, socket) {
  registerItemListeners(store, socket);
}
