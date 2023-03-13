import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemPanel } from '../../components/AddItemPanel';
import { Actions } from '../actions/actionCreators';
import { IAppState } from '../../store/state';

export function AddItemPanelContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state: IAppState) => state.items);

  const { state } = items;
  const itemsAreBeingLoaded = state === 'LOADING';

  return <AddItemPanel onSubmit={addItem} enabled={!itemsAreBeingLoaded} />;

  function addItem(text) {
    dispatch(Actions.addItem(text));
  }
}
