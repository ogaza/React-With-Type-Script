import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemForm } from '../../components/AddItemForm';
import { ItemList, ItemListPlaceholder, WithPlaceholder } from '../../components/ItemList';
import { Actions } from '../actions/actionCreators';
import { IAppState } from '../../store/state';

export function AddItemPanelContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state: IAppState) => state.items);

  const { state } = items;
  const itemsAreBeingLoaded = state === 'LOADING';
  // const itemsAreBeingLoaded = false;

  return <AddItemForm onSubmit={addItem} enabled={!itemsAreBeingLoaded} />;

  function addItem(text) {
    dispatch(Actions.addItem(text));
  }
}

export function ItemsPanelContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state: IAppState) => state.items);

  const { state, collection } = items;
  const itemsAreBeingLoaded = state === 'LOADING';
  const showItemListPlaceholder = itemsAreBeingLoaded && !collection.length;

  return (
    <WithPlaceholder
      element={<ItemList items={items} onDelete={deleteItem} />}
      placeholder={<ItemListPlaceholder />}
      showPlaceholder={showItemListPlaceholder}
    />
  );

  function deleteItem(id) {
    dispatch(Actions.deleteItem(id));
  }
}
