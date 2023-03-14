import { registerItemListeners, registerItemListListeners } from '../items';

export function registerListeners(store, socket) {
  registerItemListeners(store, socket);
  registerItemListListeners(store, socket);
}
