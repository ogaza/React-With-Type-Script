import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../';
import { IAppState } from '../../application/store/state';
import { useBasketItems } from '../../basketItems';
import { BasketItems, ItemWithMenu } from '../../common/components/itemWithMenu';
import { ListSelector } from '../../common/components/listSelectors';
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
