import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemPanel } from '../../items/components/AddItemPanel';
import { ItemActions } from '../../items';
import { actions } from '../../articles';
import { actions as basketItemsActions } from '../../basketItems';
import { IAppState } from '../../application/store/state';
import { useArticles, ArticlesPanel } from '../';
import { useBaskets } from '../../baskets';

/*
export function AddItemPanelContainer() {
  const dispatch = useDispatch();

  const items = useSelector((state: IAppState) => state.items);
  const { state: itemsLoadingState } = items;
  const itemsAreBeingLoaded = itemsLoadingState === 'LOADING';


  return (
    <AddItemPanel
      onSubmit={addItem}
      enabled={!itemsAreBeingLoaded && !selectedListIsBeingLoaded}
    />
  );
}
*/

export function ArticlesPanelContainer() {
  const dispatch = useDispatch();
  const { get } = useArticles();

  const { getSelectedBasket } = useBaskets();
  const { id: selectedBasketId } = getSelectedBasket() || {};

  return <ArticlesPanel items={get()} onItemSelected={addArticleToTheBasket} />;

  function addArticleToTheBasket({ id, name, price }) {
    console.log('ArticlesPanelContainer:addArticleToTheBasket', selectedBasketId);

    dispatch(
      basketItemsActions.addItem({
        id,
        name,
        price,
        quantity: 1,
        basketId: selectedBasketId
      })
    );
  }
}
