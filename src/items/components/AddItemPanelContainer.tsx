import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemPanel } from '../../items/components/AddItemPanel';
import { ItemActions } from '../../items';
import { IAppState } from '../../application/store/state';
import { useArticles } from '../../articles';

export function AddItemPanelContainer() {
  const dispatch = useDispatch();

  const items = useSelector((state: IAppState) => state.items);
  const { state: itemsLoadingState } = items;
  const itemsAreBeingLoaded = itemsLoadingState === 'LOADING';

  const itemsLists = useSelector((state: IAppState) => state.itemsLists);
  const { state: itemsListsLoadingState, collection: itemsListsCollection } =
    itemsLists;
  const { id: selectedListId, state: selectedListLoadingState } =
    itemsListsCollection.find((x) => x.selected) || {};
  const selectedListIsBeingLoaded = selectedListLoadingState === 'LOADING';

  return (
    <AddItemPanel
      onSubmit={addItem}
      enabled={!itemsAreBeingLoaded && !selectedListIsBeingLoaded}
    />
  );

  function addItem(text) {
    const item = {
      text,
      completed: false,
      created: Date.now(),
      listId: selectedListId
    };

    dispatch(ItemActions.addItem(item));
  }
}

export function ArticlesContainer() {
  const { get } = useArticles();
}
