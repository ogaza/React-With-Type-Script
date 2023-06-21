import { BasketItems, ItemWithMenu } from '../../components/itemWithMenu';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemActions, ItemListsActions } from '../';
import { CreateBasketButton } from '../../components/Button';
import { ItemList, ItemListPlaceholder, WithPlaceholder } from '../../components/ItemList';
import { ListSelector } from '../../components/ListSelector';
import { IAppState } from '../../store/state';
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
      <WithPlaceholder
        element={<ItemList items={items} onDelete={deleteItem} />}
        placeholder={<ItemListPlaceholder />}
        showPlaceholder={showItemListPlaceholder}
      />
      <CreateBasketButton onClick={() => {}} isSpinnerShown={false} />

      <BasketItems
        items={[
          { id: 1, name: 'Item 1', price: '9$', quantity: 1, value: 1 },
          { id: 2, name: 'Item 2', price: '9$', quantity: 1, value: 1 },
          { id: 3, name: 'Item 3', price: '9$', quantity: 1, value: 1 }
        ]}
      />
    </div>
  );

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
