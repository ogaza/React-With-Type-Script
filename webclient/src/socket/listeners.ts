import { registerItemListeners, registerItemListListeners } from '../items';
import { registerListeners as registerArticlesListeners } from '../articles';
import { registerListeners as registerBasketsListeners } from '../baskets';
import { registerListeners as registerBasketItemsListeners } from '../basketItems';

export function registerListeners(store, socket) {
  registerArticlesListeners(store, socket);
  registerBasketsListeners(store, socket);
  registerBasketItemsListeners(store, socket);
}
