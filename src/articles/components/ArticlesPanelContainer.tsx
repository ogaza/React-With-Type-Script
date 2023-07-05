import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemPanel } from '../../items/components/AddItemPanel';
import { ItemActions } from '../../items';
import { actions } from '../../articles';
import { IAppState } from '../../application/store/state';
import { useArticles, ArticlesPanel } from '../';

/*
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
*/

export function ArticlesPanelContainer() {
  const dispatch = useDispatch();
  const { get } = useArticles();

  return <ArticlesPanel items={get()} onItemSelected={addArticle} />;

  function addArticle(article) {
    console.log('ArticlesPanelContainer:addArticleToTheBasket', article);
    // dispatch(actions.addItem(article));
  }
}
