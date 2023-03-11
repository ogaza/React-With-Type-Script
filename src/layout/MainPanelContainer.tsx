import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../items/actions/actionCreators';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import { MainPanelLayout } from './MainPanel/MainPanelLayout';
import { ItemList, ItemListPlaceholder, WithPlaceholder } from '../components/ItemList';
import { AddItemForm } from '../components/AddItemForm';

export default function MainPanelContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state: IAppState) => state.items);

  const { state } = items;
  const itemsAreBeingLoaded = state === 'LOADING';
  const showItemListPlaceholder = itemsAreBeingLoaded;

  return (
    <MainPanelLayout
      panelLeft={
        <WithPlaceholder
          element={<ItemList items={items} onDelete={deleteItem} />}
          placeholder={<ItemListPlaceholder />}
          showPlaceholder={showItemListPlaceholder}
        />
      }
      panelRight={<AddItemForm onSubmit={addItem} enabled={!itemsAreBeingLoaded} />}
    />
  );

  function addItem(text) {
    dispatch(Actions.addItem(text));
  }

  function deleteItem(id) {
    dispatch(Actions.deleteItem(id));
  }
}
