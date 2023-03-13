import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList, ItemListPlaceholder, WithPlaceholder } from '../../components/ItemList';
import { Actions } from '../actions/actionCreators';
import { IAppState } from '../../store/state';
import { ListSelector } from '../../components/ListSelector';
import './ItemsPanelContainer.scss';

export function ItemsPanelContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state: IAppState) => state.items);

  const { state, collection } = items;
  const itemsAreBeingLoaded = state === 'LOADING';
  const showItemListPlaceholder = itemsAreBeingLoaded && !collection.length;

  return (
    <div className="iltems-lists--with-selector">
      <ListSelector />
      <WithPlaceholder
        element={<ItemList items={items} onDelete={deleteItem} />}
        placeholder={<ItemListPlaceholder />}
        showPlaceholder={showItemListPlaceholder}
      />
    </div>
  );

  function deleteItem(id) {
    dispatch(Actions.deleteItem(id));
  }
}
