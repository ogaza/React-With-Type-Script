import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../items/actions/actionCreators';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import { MainPanelLayout } from './MainPanel/MainPanelLayout';
import { ItemList } from '../components/ItemList';
import { AddItemForm } from '../components/AddItemForm';

export default function MainPanelContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state: IAppState) => state.items);

  const { state } = items;
  const itemsAreBeingLoaded = state === 'LOADING';

  return (
    <MainPanelLayout
      panelLeft={<ItemList items={items} onDelete={deleteItem} />}
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
