import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemActions, ItemListsActions } from '../';
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

  return (
    <div className="iltems-lists--with-selector">
      <ListSelector
        elements={itemsListsCollection}
        onSelected={selectList}
        addButtonEnabled={!itemsAreBeingLoaded}
      />
      <WithPlaceholder
        element={<ItemList items={items} onDelete={deleteItem} />}
        placeholder={<ItemListPlaceholder />}
        showPlaceholder={showItemListPlaceholder}
      />
    </div>
  );

  function deleteItem(id) {
    dispatch(ItemActions.deleteItem(id));
  }

  function selectList(listId) {
    console.log('selected list: ', listId);
    dispatch(ItemListsActions.editItem({ id: listId, selected: true }));
  }
}
