import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArticlesPanel, useArticles } from '../';
import { IAppState } from '../../application/store/state';
import { actions } from '../../articles';
import { actions as basketItemsActions } from '../../basketItems';
import { useBaskets } from '../../baskets';
import { useBasketItems } from '../../basketItems';
import { ItemActions } from '../../items';
import { AddItemPanel } from '../../items/components/AddItemPanel';

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
  // const dispatch = useDispatch();
  const { get } = useArticles();

  const { addBasketItem } = useBasketItems();

  return <ArticlesPanel items={get()} onItemSelected={handleArticleItemSelected} />;

  function handleArticleItemSelected(article) {
    console.log(
      'ArticlesPanelContainer:handleArticleItemSelected'
      // selectedBasketId
    );

    addBasketItem(article);

    // addBasketItem({
    //   id,
    //   name,
    //   price
    //   // quantity: 1,
    //   // basketId: selectedBasketId
    // });

    // dispatch(
    //   basketItemsActions.addItem({
    //     id,
    //     name,
    //     price,
    //     quantity: 1,
    //     basketId: selectedBasketId
    //   })
    // );
  }
}
