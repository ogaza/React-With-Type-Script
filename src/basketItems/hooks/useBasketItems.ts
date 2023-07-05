import { useSelector } from 'react-redux';
import { IAppState } from '../../application/store/state';

export function useBasketItems() {
  // const [basketItems, setBasketItems] = useState([
  //   { id: 1, name: 'Item 1', price: 19.99, quantity: 1 },
  //   { id: 2, name: 'Item 2', price: 14.99, quantity: 1 },
  //   { id: 3, name: 'Item 3', price: 4.99, quantity: 1 }
  // ]);
  const { state, collection: basketItems } = useSelector(
    (state: IAppState) => state.basketItems
  ) || {
    state: null,
    collection: []
  };

  return { getBasketItems, changeBasketItem };

  function getBasketItems() {
    return basketItems.map((x) => ({ ...x }));
  }
  // function getBasketItems() {
  //   return basketItems.map((x) => ({
  //     ...x,
  //     value: (x.price * x.quantity).toFixed(2)
  //   }));
  // }

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
