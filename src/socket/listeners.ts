import { registerItemListeners, registerItemListListeners } from '../items';
import { registerListeners as registerArticlesListeners } from '../articles';
import { registerListeners as registerBasketsListeners } from '../baskets';

export function registerListeners(store, socket) {
  registerBasketsListeners(store, socket);
  registerArticlesListeners(store, socket);
}
