import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../application/store/state';
import { actions as basketItemsActions } from '../../basketItems';
import { useBaskets } from '../../baskets';

export function useBasketItems() {
  // const [basketItems, setBasketItems] = useState([
  //   { id: 1, name: 'Item 1', price: 19.99, quantity: 1 },
  //   { id: 2, name: 'Item 2', price: 14.99, quantity: 1 },
  //   { id: 3, name: 'Item 3', price: 4.99, quantity: 1 }
  // ]);
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
    return basketItems.map((x) => ({ ...x }));
  }
  // function getBasketItems() {
  //   return basketItems.map((x) => ({
  //     ...x,
  //     value: (x.price * x.quantity).toFixed(2)
  //   }));
  // }

  function addBasketItem({ id, name, price }) {
    // console.log('useBasketItems:addBasketItem', { id, name, price });
    const { id: selectedBasketId } = getSelectedBasket() || {};

    const existingBasketItem = basketItems.find(
      (x) => x.name === name && x.basketId === selectedBasketId
    );

    if (!existingBasketItem) {
      dispatch(
        basketItemsActions.addItem({
          id,
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
        id,
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

    // setBasketItems(
    //   basketItems.map((x) => {
    //     if (x.id !== changedItem.id) {
    //       return x;
    //     }

    //     return { ...x, ...changedItem };
    //   })
    // );
  }
}
