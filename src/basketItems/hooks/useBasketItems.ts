import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../application/store/state';
import { actions as basketItemsActions } from '../../basketItems';
import { useBaskets } from '../../baskets';

export function useBasketItems() {
  const dispatch = useDispatch();
  const { getSelectedBasket } = useBaskets();
  const { id: selectedBasketId } = getSelectedBasket() || {};

  const { state, collection: basketItems } = useSelector(
    (state: IAppState) => state.basketItems
  ) || {
    state: null,
    collection: []
  };

  return { getBasketItems, changeBasketItem, addBasketItem };

  function getBasketItems() {
    return basketItems.map((x) => ({
      ...x,
      value: (x.price * x.quantity).toFixed(2)
    }));
  }

  function addBasketItem({ id: articleId, name, price }) {
    const existingBasketItem = basketItems.find(
      (x) => x.name === name && x.basketId === selectedBasketId
    );

    if (!existingBasketItem) {
      dispatch(
        basketItemsActions.addItem({
          name,
          price,
          quantity: 1,
          basketId: selectedBasketId
        })
      );

      return;
    }
    console.log('existingBasketItem', existingBasketItem);

    const newQuantity = existingBasketItem.quantity + 1;

    dispatch(
      basketItemsActions.editItem({
        id: existingBasketItem.id,
        name,
        price,
        quantity: newQuantity,
        basketId: selectedBasketId
      })
    );
  }

  function changeBasketItem(changedItem) {
    if (changedItem.quantity < 0) {
      return;
    }

    const { id } = changedItem;
    const existingBasketItem = basketItems.find((x) => x.id && id);

    if (!existingBasketItem) {
      return;
    }

    dispatch(
      basketItemsActions.editItem({
        id,
        ...changedItem
      })
    );
  }
}
