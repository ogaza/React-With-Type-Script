import { BasketItems, ItemWithMenu } from '../../common/components/itemWithMenu';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemActions, ItemListsActions } from '../';
import { CreateBasketButton } from '../../common/components/buttons';
import {
  ItemList,
  ItemListPlaceholder,
  WithPlaceholder
} from '../../items/components/ItemList';
import { ListSelector } from '../../common/components/listSelectors';
import { IAppState } from '../../application/store/state';
import './ItemsPanelContainer.scss';

export function ItemsPanelContainer() {
  const dispatch = useDispatch();

  const items = useSelector((state: IAppState) => state.items);
  const { state: itemsState, collection: itemsCollection } = items;
  const itemsAreBeingLoaded = itemsState === 'LOADING';
  const showItemListPlaceholder = itemsAreBeingLoaded && !itemsCollection.length;

  const itemsLists = useSelector((state: IAppState) => state.itemsLists);
  const { state: itemsListsState, collection: itemsListsCollection } = itemsLists;
  const itemsListsAreBeingLoaded = itemsListsState === 'LOADING';

  const { getBasketItems, changeBasketItem } = useBasketItems();
  const newBasketItems = getBasketItems();

  return (
    <div className="iltems-lists--with-selector">
      <ListSelector
        elements={itemsListsCollection}
        onSelected={selectList}
        addButtonEnabled={!itemsListsAreBeingLoaded}
        // addButtonEnabled={!itemsAreBeingLoaded}
        onAddButtonClick={addNewList}
        onCloseClick={removeList}
      />
      {/* <WithPlaceholder
        element={<ItemList items={items} onDelete={deleteItem} />}
        placeholder={<ItemListPlaceholder />}
        showPlaceholder={showItemListPlaceholder}
      /> */}
      {/* <CreateBasketButton onClick={() => {}} isSpinnerShown={false} /> */}

      <BasketItems>
        {newBasketItems.map((x) => (
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

  function deleteItem(id) {
    dispatch(ItemActions.deleteItem(id));
  }

  function selectList(listId) {
    dispatch(ItemListsActions.editItem({ id: listId, selected: true }));
  }

  function addNewList() {
    console.log('adding new list');
    dispatch(ItemListsActions.addItem({}));
  }

  function removeList(listId) {
    console.log('remove list clicked: ', listId);
    dispatch(ItemListsActions.deleteItem(listId));
  }
}

function useBasketItems() {
  const [basketItems, setBasketItems] = useState([
    { id: 1, name: 'Item 1', price: 19.99, quantity: 1 },
    { id: 2, name: 'Item 2', price: 14.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 4.99, quantity: 1 }
    // { id: 4, name: 'Item 4', price: 4.99, quantity: 1 },
    // { id: 5, name: 'Item 5', price: 4.99, quantity: 1 },
    // { id: 6, name: 'Item 6', price: 4.99, quantity: 1 },
    // { id: 7, name: 'Item 7', price: 4.99, quantity: 1 },
    // { id: 8, name: 'Item 8', price: 4.99, quantity: 1 },
    // { id: 9, name: 'Item 9', price: 4.99, quantity: 1 },
    // { id: 10, name: 'Item 10', price: 4.99, quantity: 1 }
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
