import { useSelector } from 'react-redux';
import { IAppState } from '../../application/store/state';
import { IArticle } from '../models/article';

export function useArticles(): IArticles {
  const { state, collection: articles } = useSelector(
    (state: IAppState) => state.articles
  ) || {
    state: null,
    collection: []
  };

  return { get: getArticles };

  function getArticles(): IArticle[] {
    return articles.map((x) => ({
      ...x
    }));
  }
}

export interface GetEntities<T> {
  get: () => T[];
}

export interface IArticles extends GetEntities<IArticle> {}
