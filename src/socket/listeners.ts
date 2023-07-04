import { registerItemListeners, registerItemListListeners } from '../items';
import { registerListeners as registerBasketsListeners } from '../baskets';

export function registerListeners(store, socket) {
  registerBasketsListeners(store, socket);
  registerItemListeners(store, socket);
  registerItemListListeners(store, socket);
}
