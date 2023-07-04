import { BasketItems, ItemWithMenu } from '../../common/components/itemWithMenu';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../';
import { ListSelector } from '../../common/components/listSelectors';
import { IAppState } from '../../application/store/state';
import './BasketsPanelContainer.scss';

export function BasketsPanelContainer() {
  const dispatch = useDispatch();

  //const items = useSelector((state: IAppState) => state.items);
  //const { state: itemsState, collection: itemsCollection } = items;
  // const itemsAreBeingLoaded = itemsState === 'LOADING';
  //const showItemListPlaceholder = itemsAreBeingLoaded && !itemsCollection.length;

  const basketsState = useSelector((state: IAppState) => state.baskets) || {
    state: null,
    collection: []
  };
  const { state: basketsLoadingState, collection: basketsCollection } = basketsState;
  const basketsAreBeingLoaded = basketsLoadingState === 'LOADING';

  const { getBasketItems, changeBasketItem } = useBasketItems();
  const basketItems = getBasketItems();

  return (
    <div className="iltems-lists--with-selector">
      <ListSelector
        elements={basketsCollection}
        onSelected={selectBasket}
        addButtonEnabled={!basketsAreBeingLoaded}
        // addButtonEnabled={!itemsAreBeingLoaded}
        onAddButtonClick={addNewBasket}
        onCloseClick={deleteBasket}
      />

      <BasketItems>
        {basketItems.map((x) => (
          <ItemWithMenu
            key={x.id}
            onChange={handleBasketItemChange}
            id={x.id}
            name={x.name}
            price={x.price}
            quantity={x.quantity}
            value={x.value}
          />
        ))}
      </BasketItems>
    </div>
  );

  function handleBasketItemChange(changedItem) {
    console.log('handleBasketItemChange, changedItem: ', changedItem);
    changeBasketItem(changedItem);
  }

  function selectBasket(id) {
    dispatch(actions.editItem({ id, selected: true }));
  }

  function addNewBasket() {
    console.log('adding new basket');
    dispatch(actions.addItem({}));
  }

  function deleteBasket(listId) {
    console.log('remove basket clicked: ', listId);
    dispatch(actions.deleteItem(listId));
  }
}

function useBasketItems() {
  const [basketItems, setBasketItems] = useState([
    { id: 1, name: 'Item 1', price: 19.99, quantity: 1 },
    { id: 2, name: 'Item 2', price: 14.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 4.99, quantity: 1 }
  ]);

  return { getBasketItems, changeBasketItem };

  function getBasketItems() {
    return basketItems.map((x) => ({
      ...x,
      value: (x.price * x.quantity).toFixed(2)
    }));
  }

  function changeBasketItem(changedItem) {
    if (changedItem.quantity < 0) {
      return;
    }

    setBasketItems(
      basketItems.map((x) => {
        if (x.id !== changedItem.id) {
          return x;
        }

        return { ...x, ...changedItem };
      })
    );
  }
}
